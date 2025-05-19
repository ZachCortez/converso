'use client';

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Call your auth function here (Appwrite, Supabase, Firebase, etc.)
        console.log({ email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-center mb-6">Sign In to Converso</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link href="/sign-up" className="text-indigo-600 hover:underline">Sign up</Link>
                </div>

                {/* Optional: OAuth buttons */}
                <div className="mt-6">
                    <button className="w-full border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100">
                        <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </main>
    );
}
