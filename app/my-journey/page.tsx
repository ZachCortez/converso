import Image from "next/image";

const Profile = () => {
    return (
        <main className="max-w-[1400px] mx-auto px-14 pt-10 pb-5 flex flex-col gap-8 bg-background text-foreground">
            <h1 className="text-3xl font-bold">Profile</h1>

            <section className="user-section rounded-4xl border border-black p-6 max-w-md w-full">
                <div className="user-avatar border-2 border-black rounded-lg py-8 flex items-center justify-center mb-6">
                    {/* Replace with actual avatar */}
                    <div className="w-24 h-24 bg-muted rounded-full" />
                </div>

                <div className="flex flex-col gap-3 text-lg">
                    <p><strong>Name:</strong> Zach Cortez</p>
                    <p><strong>Email:</strong> zach.cortez@icloud.com</p>
                    <p><strong>Location:</strong> Charlotte, NC</p>
                    <p><strong>About Me:</strong> Self-taught full stack web developer passionate about modern UI/UX and clean code.</p>
                </div>
            </section>

            <section className="companion-section p-6 border-2 border-orange-500 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>React.js, Next.js, TailwindCSS</li>
                    <li>TypeScript, JavaScript</li>
                    <li>C#, Python</li>
                    <li>GSAP, Three.js</li>
                    <li>Appwrite, REST APIs</li>
                </ul>
            </section>
        </main>
    );
};

export default Profile;
