import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import User from "@/models/user";
import { compare, hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

// joi package for input validation
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required(),
});

export const dynamic = "force-dynamic"; // components will be rendered and data fetched on every incoming request to the server

// Initialize the database connection
connectToDb();
// post api request
export async function POST(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser?.role == "admin") {
      const id = authenticatedUser?.id;

      const { name, oldPassword, password, confirmPassword, email } =
        await req.json();

      //   validate the schema
      const { error } = schema.validate({
        name,
        email,
        password,
        confirmPassword,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
      // check if user already exists
      const userExists = await User.findOne({ _id: id });

      if (!userExists) {
        return NextResponse.json({
          success: false,
          message: "المستخدم غير بالفعل",
        });
      } else {
        const checkPassword = await compare(oldPassword, userExists.password);

        if (!checkPassword) {
          return NextResponse.json({
            success: false,
            message: "كلمة المرور القديمة غير صحيحة",
          });
        } else {
          if (password != confirmPassword) {
            return NextResponse.json({
              success: false,
              message: "كلمة المرور غير متطابقة",
            });
          } else {
            const hashPassword = await hash(password, 12);
            console.log(hashPassword, "hashPassword updateUserInfo");
            const updateUserInfo = await User.findByIdAndUpdate(
              userExists._id,
              { name, email, password: hashPassword },

              { new: true }
            );

            // check if user created successfully
            if (updateUserInfo) {
              return NextResponse.json({
                success: true,
                message: "تم تعديل المستخدم بنجاح",
              });
            }
          }
        }
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عفوا ليس لديك صلاحية للدخول",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطأ ما",
    });
  }
}
