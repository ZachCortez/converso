import CompanionCard from "@/components/CompanionCard";

const mockCompanions = [
    {
        id: "math-1",
        name: "Math Mentor Mia",
        topic: "Algebra Fundamentals",
        subject: "Math",
        duration: 20,
        color: "#FEE2E2"
    },
    {
        id: "sci-2",
        name: "Science Sam",
        topic: "Photosynthesis Simplified",
        subject: "Science",
        duration: 15,
        color: "#D1FAE5"
    },
    {
        id: "eng-3",
        name: "English Ellie",
        topic: "Essay Writing Essentials",
        subject: "English",
        duration: 25,
        color: "#DBEAFE"
    }
];

export default function CompanionsLibrary() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Your AI Companions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mockCompanions.map((companion) => (
                    <CompanionCard key={companion.id} {...companion} />
                ))}
            </div>
        </main>
    );
}
