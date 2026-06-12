import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Journey | Chadrack Kavula Mulamba",
  description:
    "The professional journey of Chadrack Kavula Mulamba — milestones, education, and career progression as a Software Developer and Data Scientist.",
  alternates: {
    canonical: "https://portfolio.chadrack.dev/journey",
  },
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-x-hidden">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8" id="journey">
        <Timeline />
      </div>
    </main>
  );
}
