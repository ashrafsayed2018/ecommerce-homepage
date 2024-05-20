import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Cart from "@/models/cart";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

connectToDb();
export async function GET(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id) {
        return NextResponse.json({
          success: false,
          message: "ليس لديك حساب، الرجاء تسجيل الدخول",
        });
      }
      await Product.find({});
      const extractAllCartItems = await Cart.find({ userID: id }).populate(
        "productID"
      );
      console.log(extractAllCartItems, "all cart items");
      if (extractAllCartItems) {
        return NextResponse.json({
          success: true,
          data: extractAllCartItems,
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "لا يوجد منتجات في عربة التسوق الخاصة بك",
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
