import connectToDb from "@/database";
import { AuthUser } from "@/authUser/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
connectToDb();
export async function PUT(req) {
  try {
    const authenticatedUser = await AuthUser(req);
    if (authenticatedUser?.role === "admin") {
      const extractedData = await req.json();
      const {
        _id,
        name,
        description,
        price,
        category,
        sizes,
        deliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      } = extractedData;
      // update product
      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: _id,
        },
        {
          name,
          description,
          price,
          category,
          sizes,
          deliveryInfo,
          onSale,
          priceDrop,
          imageUrl,
        },
        {
          new: true,
        }
      );
      if (updatedProduct) {
        return NextResponse.json({
          success: true,
          message: "تم تحديث المنتج بنجاح",
          data: updatedProduct,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل في تحديث المنتجات",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك الصلاحيات الكافية",
      });
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: "حدث خطاء  ما",
    });
  }
}
