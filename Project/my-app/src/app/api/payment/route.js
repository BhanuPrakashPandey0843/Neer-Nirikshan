// src/app/api/payment/route.js
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // ✅ create Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // ✅ create order
    const options = {
      amount: 250 * 100, // 250 INR in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return new Response(
      JSON.stringify({ success: true, order }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Payment API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Payment init failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
