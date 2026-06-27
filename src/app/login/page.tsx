"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();



    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.ok) {
            router.push("/dashboard");
        }

        console.log(result);
    }

    return (
        <form
            onSubmit={handleLogin}
            className="flex min-h-screen flex-col items-center justify-center gap-4"
        >
            <input
                placeholder="Email"
                className="border p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="rounded bg-black px-4 py-2 text-white"
            >
                Login
            </button>
        </form>
    );
}