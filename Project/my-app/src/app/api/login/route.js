import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Path to your users file
const usersFile = path.join(process.cwd(), "src/auth/users.json");

// JWT secret
const SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Missing email or password" }),
        { status: 400 }
      );
    }

    // Load users
    let users = [];
    try {
      const data = await fs.readFile(usersFile, "utf8");
      users = JSON.parse(data);
    } catch (err) {
      console.warn("No users file found or empty.");
    }

    // Find user by email
    const user = users.find((u) => u.email === email);
    if (!user || !user.password) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Compare password with bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Comparing:", password, "with hash:", user.password, "->", isMatch);

    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, paid: user.paid },
      SECRET,
      { expiresIn: "1h" }
    );

    // Respond with token and user info
    return new Response(
      JSON.stringify({
        token,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName || user.username,
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
