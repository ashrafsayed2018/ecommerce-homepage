import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import Address from "@/models/address";
import Joi from "joi";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const addNewAddress = Joi.object({
  fullName: Joi.string().required(),
  address: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  postalCode: Joi.string().required(),
  userID: Joi.string().required(),
});
 connectToDb();
export async function POST(req) {
  try {
    const authenticatedUser = await AuthUser(req);

    if (authenticatedUser) {
      const data = await req.json();

      const { fullName, address, country, city, postalCode, userID } = data;
      const { error } = addNewAddress.validate({
        fullName,
        address,
        country,
        city,
        postalCode,
        userID,
      });
      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
      // add new address
      const newAddress = await Address.create(data);
      if (newAddress) {
        return NextResponse.json({
          success: true,
          message: "تم اضافة العنوان بنجاح",
          data: newAddress,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "فشل في اضافة العنوان",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك صلاحية للدخول",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "حدث خطأ غير معروف",
    });
  }
}
