'use client';

import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const words = [
    { text: "Converso", imgPath: "/flags/us.svg" },
    { text: "Conversación", imgPath: "/flags/es.svg" },
    { text: "会話", imgPath: "/flags/jp.svg" },
    { text: "Conversa", imgPath: "/flags/pt.svg" },
    { text: "Conversație", imgPath: "/flags/ro.svg" },
];

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentWord, setCurrentWord] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setFade(true); // fade in new word
            }, 300); // fade out duration
        }, 3000); // switch every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Call your auth function here (Appwrite, Supabase, Firebase, etc.)
        console.log({ email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">

                {/* Animated Heading */}
                <h1 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">
                    Sign In to
                    <span
                        key={words[currentWord].text}
                        className={`flex items-center gap-2 transition-all duration-700 ease-in-out transform ${
                            fade ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-1"
                        }`}
                    >
                        <Image
                            src={words[currentWord].imgPath}
                            alt="Flag"
                            width={24}
                            height={24}
                            className="rounded-full bg-white shadow-md"
                        />
                        <span className="text-orange-500">{words[currentWord].text}</span>
                    </span>
                </h1>


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
                        className="companion-section p-6 text-white hover:bg-indigo-400 bg-orange-500 w-full py-2 px-4 rounded-lg font-medium transition"
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
