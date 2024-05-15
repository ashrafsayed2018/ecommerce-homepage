import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

connectToDb();

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "عذرا لا يوجد رقم العنوان",
      });
    }
    const authenticatedUser = AuthUser(req);
    if (!authenticatedUser) {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك صلاحية للدخول",
      });
    } else {
      const deleteAddress = await Address.findByIdAndDelete(id);
      if (deleteAddress) {
        return NextResponse.json({
          success: true,
          message: "تم حذف العنوان بنجاح",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل في حذف العنوان",
        });
      }
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطأ اثناء حذف العنوان",
    });
  }
}
