import connectToDb from "@/database";
import { AuthUser } from "@/authUser/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import Cart from "@/models/cart";

export const dynamic = "force-dynamic";

connectToDb();
export async function DELETE(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id) {
        return NextResponse.json({
          success: false,
          message: "المنتج غير موجود",
        });
      } else {
        // delete product
        const deletedProduct = await Product.deleteOne({ _id: id });
        await Cart.deleteMany({ productID: id });
        if (deletedProduct) {
          return NextResponse.json({
            success: true,
            message: "تم حذف المنتج بنجاح",
          });
        } else {
          return NextResponse.json({
            success: false,
            message: "فشل حذف المنتج",
          });
        }
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك صلاحية للحذف",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطأ ما",
    });
  }
}
