// my-app/src/app/api/signup/route.js
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "supersecretkey"; // move to env in production

export async function POST(req) {
  try {
    const { email, password, fullName, paid, paymentStatus } = await req.json();
    const filePath = path.join(process.cwd(), "src/auth/users.json");

    // Ensure users.json exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }

    const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Check if user exists
    if (users.find((u) => u.email === email)) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to JSON
    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      paid: paid ?? (paymentStatus === "succeeded"), // ✅ handles both cases
    };

    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    // Generate token
    const token = jwt.sign(
      { email: newUser.email, paid: newUser.paid },
      SECRET,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({ success: true, token }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
