import Hero from "@/app/components/Hero";
import StatsStorySection from "./components/StatsStorySection";
import CoachesSection from "./components/CoachesSection";
import RegistrationSection from "./components/RegistrationSection";
import UpcomingMeetsSection from "./components/UpcomingMeetsSection";
import SocialFeedSection from "./components/SocialFeedSection";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      <Hero />
      <StatsStorySection />
      <CoachesSection />
      <RegistrationSection />
      <UpcomingMeetsSection />
      <SocialFeedSection />
    </main>
  );
}
