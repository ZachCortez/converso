'use client';

import {useEffect, useState} from "react";
import Link from "next/link";

const words = [
    { text: "Converso" },
];

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentWord, setCurrentWord] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setFade(true); // fade in new word
            }, 1000); // fade out duration
        }, 3000); // switch every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Call your sign-up logic here
        console.log({ email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">Create Your</h1>
                    <h1 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">

                    <span
                        key={words[currentWord].text}
                        className={`flex items-center gap-2 transition-all duration-700 ease-in-out transform ${
                            fade ? "opacity-100 scale-100 translate-y-0" : "opacity-10 scale-90 translate-y-1"
                        }`}
                    >
                        <span className="text-orange-500">{words[currentWord].text}</span>
<h1 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">
                    </h1>
                    </span>
                    Account
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

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm
                            Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-indigo-400 text-white py-2 px-4 rounded-lg font-medium transition"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-indigo-600 hover:underline">Sign in</Link>
                </div>

                {/* Optional: OAuth */}
                <div className="mt-6">
                    <button
                        className="w-full border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100">
                        <img src="/icons/google.svg" alt="Google" className="w-5 h-5"/>
                        Sign up with Google
                    </button>
                </div>
            </div>
        </main>
    );
}
