import connectToDb from "@/database";
import { AuthUser } from "@/authUser/AuthUser";
import Setting from "@/models/setting";
import Joi from "joi";
import { NextResponse } from "next/server";
const joiArabicMessages = {
  "any.required": "هذا الحقل مطلوب",
  "string.base": "هذا الحقل يجب أن يكون نص",
  "string.empty": "هذا الحقل لا يمكن أن يكون فارغ",
};

const createSettingSchema = Joi.object({
  siteName: Joi.string().required(),
  logoUrl: Joi.string().required(),
})
  .messages(joiArabicMessages)
  .options({ abortEarly: false });

export const dynamic = "force-dynamic";
connectToDb();

export async function POST(req) {
  try {
    const authenticatedUser = await AuthUser(req);

    if (authenticatedUser?.role === "admin") {
      const extractedData = await req.json();
      // const { error } = createSettingSchema.validate(extractedData);
      const { error } = createSettingSchema.validate(extractedData);
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const exisitingSitting = await Setting.findOne();
      if (exisitingSitting) {
        return NextResponse.json({
          success: false,
          message: "تم تسجيل الاعدادات من قبل",
        });
      }
      const newSetting = await Setting.create(extractedData);

      if (newSetting) {
        return NextResponse.json({
          success: true,
          message: "تمت اضافة الاعدادات بنجاح",
          data: newSetting,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل في اضافة الاعدادات",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك صلاحيات للدخول على هذه الصفحة",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "حدث خطاء ما",
    });
  }
}
