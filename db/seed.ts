import { db } from "./index";
import { coaches, athletes } from "./schema";

// Seed data for coaches
const coachesData = [
  {
    name: "Kai Selvon",
    role: "Head Sprint Coach",
    qualifications:
      "USATF Level 1 Certified | Three-Time Olympian | NCAA Division I Athlete | Elite Sprint Development Specialist",
    experience:
      "International-level sprint coach and Three-Time Olympian representing Trinidad & Tobago",
    image: "/images/coaches/coachkai.jpeg",
    bio: "International-level sprint coach and Three-Time Olympian representing Trinidad & Tobago, bringing elite sprint systems, discipline-based development, and world-class athlete experience to A1 Vertex Athletics.",
    specialties: [
      "Sprint mechanics",
      "Acceleration development",
      "Speed endurance",
      "Relay development",
      "Race execution",
      "Competition preparation",
      "Athlete confidence & discipline",
    ],
    philosophy: "Elite performance starts with elite thinking under pressure.",
    isHeadCoach: 1,
    highlights: [
      "Three-Time Olympian — Trinidad & Tobago",
      "World Athletics Relays Bronze Medalist",
      "Commonwealth Games Finalist",
      "Pan American Junior Silver Medalist",
      "CAC Championships Silver Medalist",
      "Multiple-Time National Champion",
      "Trinidad & Tobago Junior Record Holder",
      "Former Auburn University Sprinter",
      "SEC Indoor Champion",
      "NCAA Division I Athlete",
    ],
    focus: [
      "Sprint mechanics",
      "Acceleration development",
      "Speed endurance",
      "Relay development",
      "Race execution",
      "Competition preparation",
      "Athlete confidence & discipline",
    ],
  },
  {
    name: "Coach Rivera",
    role: "Strength & Conditioning Coach",
    qualifications: "NSCA Certified | Sports Performance Specialist",
    experience: "10+ years in elite sprint & athletic development systems",
    image: "/images/coaches/coach-rivera.jpg",
    bio: "Specializes in explosive strength development, sprint-specific conditioning, movement efficiency, and long-term athlete durability.",
    specialties: [
      "Explosive power development",
      "Sprint-specific strength training",
      "Movement mechanics",
      "Injury prevention systems",
      "Athlete durability programming",
      "Performance conditioning cycles",
    ],
    philosophy: "Strength builds speed. Movement quality builds longevity.",
    isHeadCoach: 0,
    highlights: [],
    focus: [],
  },
  {
    name: "Coach Thompson",
    role: "Middle Distance Development Coach",
    qualifications: "Endurance Performance Specialist | Track & Field Coach",
    experience: "8+ years coaching 400m–800m competitive athletes",
    image: "/images/coaches/coach-thompson.jpg",
    bio: "Focused on endurance speed, pacing strategy, aerobic development, and tactical race execution.",
    specialties: [
      "400m / 800m development",
      "Endurance speed systems",
      "Race strategy & pacing",
      "Aerobic conditioning",
      "Competition preparation",
      "Tactical execution",
    ],
    philosophy:
      "Consistency and discipline build championship endurance athletes.",
    isHeadCoach: 0,
    highlights: [],
    focus: [],
  },
  {
    name: "Coach Daniels",
    role: "Mental Performance Coach",
    qualifications: "Certified Mental Performance Consultant (CMPC)",
    experience: "Youth & elite athlete mindset development specialist",
    image: "/images/coaches/coach-daniels.jpg",
    bio: "Specializes in confidence building, focus training, competition mindset, and emotional resilience.",
    specialties: [
      "Confidence development",
      "Competition mindset training",
      "Mental resilience systems",
      "Focus under pressure",
      "Athlete accountability",
      "Leadership development",
    ],
    philosophy: "Elite performance starts with elite thinking under pressure.",
    isHeadCoach: 0,
    highlights: [],
    focus: [],
  },
];

// Seed data for athletes
const athletesData = [
  {
    name: "Aubrianna Grant",
    title: "Rising Sprint Athlete",
    image: "/images/athletes/aubriannagrant.jpeg",
    dob: "January 8, 2014",
    age: 12,
    ageGroup: "U13",
    events: ["100m", "200m", "4×100 Relay"],
    pbs: { "100m": "12.79s", "200m": "26.20s" },
    highlights: [
      "4× AAU All-American",
      "2× Indoor All-American",
      "2× Outdoor All-American",
      "Multiple medal finishes in youth competition",
    ],
    attributes: [
      "Explosive sprint speed",
      "Strong competitive mentality",
      "Disciplined work ethic",
      "Coachable & team-oriented",
      "Leadership qualities",
    ],
    bio: "Aubrianna Grant is one of the rising young sprint athletes representing A1 Vertex Athletics. She began her track & field journey at the age of 9 and quickly developed a passion for sprinting and competition. Known for her natural speed, determination, and competitive mindset, she has consistently shown strong sprint mechanics and elite-level potential for her age group.",
    motto: "BE GREAT.",
    goals:
      "Continue developing as a student-athlete, improve sprint performances, compete at national-level competitions, and inspire other young athletes through hard work, discipline, and consistency.",
    accent: "from-cyan-400 to-blue-500",
    isSpotlight: 1,
  },
  {
    name: "Athlete Coming Soon",
    title: "Sprint Sprinter",
    image: "/images/athletes/placeholder.jpeg",
    dob: "—",
    age: null,
    ageGroup: "U15",
    events: ["100m", "200m"],
    pbs: { "100m": "—", "200m": "—" },
    highlights: [],
    attributes: [],
    bio: "Profile coming soon. Stay tuned for updates from A1 Vertex Athletics.",
    motto: "",
    goals: "",
    accent: "from-pink-400 to-rose-500",
    isSpotlight: 0,
  },
  {
    name: "Athlete Coming Soon",
    title: "Middle Distance Prospect",
    image: "/images/athletes/placeholder.jpeg",
    dob: "—",
    age: null,
    ageGroup: "U17",
    events: ["400m", "4×400 Relay"],
    pbs: { "400m": "—" },
    highlights: [],
    attributes: [],
    bio: "Profile coming soon. Stay tuned for updates from A1 Vertex Athletics.",
    motto: "",
    goals: "",
    accent: "from-violet-400 to-purple-600",
    isSpotlight: 0,
  },
];

export async function seed() {
  try {
    console.log("🌱 Starting seed...");

    // Clear existing data
    await db.delete(coaches);
    await db.delete(athletes);

    // Insert coaches
    console.log("📚 Seeding coaches...");
    for (const coach of coachesData) {
      await db.insert(coaches).values(coach as any);
    }
    console.log(`✅ Seeded ${coachesData.length} coaches`);

    // Insert athletes
    console.log("🏃 Seeding athletes...");
    for (const athlete of athletesData) {
      await db.insert(athletes).values(athlete as any);
    }
    console.log(`✅ Seeded ${athletesData.length} athletes`);

    console.log("✨ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Seed failed:", error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (require.main === module) {
  seed().then(() => process.exit(0));
}
