import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { RegisterSchema } from "@/lib/validations/auth";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const validation = RegisterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const { name, email, password, role } = validation.data;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 201,
      }
    );
  }catch (error) {
  console.error("REGISTER API ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    },
    { status: 500 }
  );
  }
}
