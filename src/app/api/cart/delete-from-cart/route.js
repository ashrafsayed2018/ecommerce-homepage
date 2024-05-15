import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
connectToDb();
export async function DELETE(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id) {
        return NextResponse.json({
          success: false,
          message: "لا يوجد منتجات في عربة التسوق الخاصة بك",
        });
      }
      const deleteCartItem = await Cart.findByIdAndDelete(id);
      if (!deleteCartItem) {
        return NextResponse.json({
          success: false,
          message: "فشل العملية، الرجاء المحاولة مرة اخرى",
        });
      } else {
        return NextResponse.json({
          success: true,
          message: "تم حذف المنتج من عربة التسوق بنجاح",
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
      message: "فشل العملية، الرجاء المحاولة مرة اخرى",
    });
  }
}
