import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "DONOR" | "NGO" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role: "DONOR" | "NGO" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "DONOR" | "NGO" | "ADMIN";
  }
}