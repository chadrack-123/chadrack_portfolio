import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";

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
