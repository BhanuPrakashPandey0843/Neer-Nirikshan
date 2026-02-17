export const runtime = "nodejs"; 
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const usersFile = path.join(process.cwd(), "src/auth/users.json");
const SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing email or password" }), {
        status: 400,
      });
    }

    if (!SECRET) {
      return new Response(JSON.stringify({ error: "JWT secret not configured" }), {
        status: 500,
      });
    }

    // Load users
    let users = [];
    try {
      const data = await fs.readFile(usersFile, "utf8");
      users = JSON.parse(data);
    } catch {
      return new Response(JSON.stringify({ error: "No users found" }), {
        status: 404,
      });
    }

    // Find user
    const user = users.find((u) => u.email === email);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    // Create JWT (use email instead of missing id)
    const token = jwt.sign(
      { email: user.email, paid: user.paid },
      SECRET,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({
        token,
        user: {
          email: user.email,
          fullName: user.fullName,
          paid: !!user.paid,
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
