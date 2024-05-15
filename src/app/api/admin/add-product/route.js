import connectToDb from "@/database";
import { AuthUser } from "@/authUser/AuthUser";
import Product from "@/models/product";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  sizes: Joi.array().required(),
  deliveryInfo: Joi.string().required(),
  onSale: Joi.string().required(),
  priceDrop: Joi.number().required(),
  imageUrl: Joi.string().required(),
});
export const dynamic = "force-dynamic";
connectToDb();
export async function POST(req) {
  try {
    const authenticatedUser = await AuthUser(req);

    if (authenticatedUser?.role === "admin") {
      const extractedData = await req.json();
      const {
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

      const { error } = addNewProductSchema.validate({
        name,
        description,
        price,
        category,
        sizes,
        deliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      });
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      //create new product
      const newProduct = await Product.create(extractedData);

      if (newProduct) {
        return NextResponse.json({
          success: true,
          message: "تمت اضافة المنتج بنجاح",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل في اضافة المنتج",
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
