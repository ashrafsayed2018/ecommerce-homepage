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

const updateSettingSchema = Joi.object({
  siteName: Joi.string(),
  siteDescription: Joi.string(),
  logoUrl: Joi.string(),
})
  .messages(joiArabicMessages)
  .options({ abortEarly: false });

export const dynamic = "force-dynamic";
connectToDb();

export async function PUT(req) {
  try {
    const authenticatedUser = await AuthUser(req);

    if (authenticatedUser?.role === "admin") {
      const extractedData = await req.json();
      const { error } = updateSettingSchema.validate(extractedData);

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const existingSettings = await Setting.findOne();

      if (existingSettings) {
        const updatedSettings = await Setting.findByIdAndUpdate(
          existingSettings._id,
          extractedData,
          { new: true }
        );

        return NextResponse.json({
          success: true,
          message: "تم تحديث الاعدادات بنجاح",
          data: updatedSettings,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "لا توجد اعدادات مسجلة حاليا",
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
