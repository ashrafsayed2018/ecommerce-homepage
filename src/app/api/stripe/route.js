import { AuthUser } from "@/authUser/AuthUser";
import connectToDb from "@/database";
import { BASE_API_URL } from "@/utils/constants";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const stripe = require("stripe")("sk_test_0gCS2wDOsTWp0XEiTpWAPewe00VQyZUeOP");
connectToDb();
export async function POST(req) {
  try {
    const isAuthenticatedUser = await AuthUser(req);
    if (isAuthenticatedUser) {
      const response = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: response,
        mode: "payment",
        success_url: `${BASE_API_URL}/checkout?status=success`,
        cancel_url: `${BASE_API_URL}/checkout?status=cancel`,
      });

      return NextResponse.json({
        status: 204,
        success: true,
        id: session.id,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "عذرا ليس لديك صلاحية للدخول",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "حدث خطأ ما",
    });
  }
}
