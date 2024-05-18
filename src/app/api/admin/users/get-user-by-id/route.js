import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

connectToDb();

export async function GET(req) {
  try {
    const authenticatedUser = await AuthUser(req);

    if (!authenticatedUser) {
      return NextResponse.json({
        success: false,
        message: "عفوا ليس لديك صلاحية للدخول",
      });
    } else {
      const user = await User.findById({ _id: authenticatedUser.id });
      if (user) {
        return NextResponse.json({
          success: true,
          data: user,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "لا يوجد بيانات",
        });
      }
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطأ ما",
    });
  }
}
