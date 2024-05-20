import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Setting from "@/models/setting";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

connectToDb();
export async function GET(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser) {
      const settings = await Setting.findOne();

      if (settings) {
        const { _id, siteName, logoUrl } = settings;
        return NextResponse.json({
          success: true,
          data: { _id, siteName, logoUrl },
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل الحصول على البيانات",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا  ليس لديك الصلاحيات",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "حدث خطاء ما الرجاء المحاولة لاحقا",
    });
  }
}
