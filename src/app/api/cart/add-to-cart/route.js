import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Cart from "@/models/cart";
import Joi from "joi";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const AddToCart = Joi.object({
  userID: Joi.string().required(),
  productID: Joi.string().required(),
  chestSize: Joi.number().required(),
  shoulderSize: Joi.number().required(),
  sleeveSize: Joi.number().required(),
  fullLength: Joi.number().required(),
});
connectToDb();
export async function POST(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser) {
      const data = await req.json();
      const {
        userID,
        productID,
        chestSize,
        shoulderSize,
        sleeveSize,
        fullLength,
      } = data;
      const { error } = AddToCart.validate({
        userID,
        productID,
        chestSize,
        shoulderSize,
        sleeveSize,
        fullLength,
      });
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
      const isCurrentCartItemExists = await Cart.find({ productID, userID });
      if (isCurrentCartItemExists.length > 0) {
        return NextResponse.json({
          success: false,
          message:
            "هذا المنتج موجود بالفعل في عربة التسوق الخاصة بك، الرجاء تحديث الصفحة لتحديث عربة التسوق",
        });
      }

      const saveProductToCart = await Cart.create({
        userID,
        productID,
        chestSize,
        shoulderSize,
        sleeveSize,
        fullLength,
      });
      if (saveProductToCart) {
        return NextResponse.json({
          success: true,
          message: "تمت العملية بنجاح، تمت اضافة المنتج الي عربة التسوق",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل العملية، الرجاء المحاولة مرة اخرى",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "ليس لديك حساب، الرجاء تسجيل الدخول",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "حدث خطأ ما، الرجاء المحاولة مرة اخرى",
    });
  }
}
