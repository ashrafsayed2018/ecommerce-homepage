import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

connectToDb();

export async function GET(req) {
  try {
    const authenticatedUser = AuthUser(req);
    if (!authenticatedUser) {
      return NextResponse.json({
        success: false,
        message: "عفوا ليس لديك صلاحية للدخول",
      });
    } else {
      const users = await User.find({})
        .sort({ createdAt: -1 }) // Sort by createdAt in descending order
        .limit(3);
      if (users) {
        return NextResponse.json({
          success: true,
          data: users,
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
