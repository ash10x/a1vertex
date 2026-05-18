export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  scheme: "yellow" | "pink" | "cyan" | "purple";
  gradientStart: string;
  gradientEnd: string;
  hero: string;
  highlights: string[];
  focus: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "elite-training",
    icon: "🏃",
    title: "Elite Training",
    description:
      "World-class coaching methods designed to unlock your peak athletic potential and maximize performance gains.",
    scheme: "yellow",
    gradientStart: "#fcd34d",
    gradientEnd: "#f59e0b",
    hero: "A personalized championship training plan blending explosive speed work, track-specific strength, and recovery intelligence.",
    highlights: [
      "Customized season planning for sprinters and jumpers",
      "High-intensity acceleration, power, and speed drills",
      "Technique refinement for starts and transitions",
    ],
    focus: [
      "Elite sprint mechanics",
      "Reactive power development",
      "Race-ready confidence",
    ],
    outcomes: [
      "Faster starts and quicker finishes",
      "Greater consistency under pressure",
      "A measurable edge on competition day",
    ],
  },
  {
    slug: "strength-conditioning",
    icon: "💪",
    title: "Strength & Conditioning",
    description:
      "Scientifically-backed programs to build explosive power, endurance, and injury-resilient physiques.",
    scheme: "pink",
    gradientStart: "#fb7185",
    gradientEnd: "#f472b6",
    hero: "Build athletic durability and elite strength with mobility-first training designed for high-volume track and field performance.",
    highlights: [
      "Movement screening and functional strength cycles",
      "Olympic lifting, plyometrics, and stability training",
      "Recovery protocols to keep you training harder longer",
    ],
    focus: [
      "Power output and force production",
      "Joint integrity and mobility",
      "Conditioning for repeat performance",
    ],
    outcomes: [
      "Improved acceleration and jump height",
      "Reduced injury risk",
      "Stronger, more resilient training capacity",
    ],
  },
  {
    slug: "sports-psychology",
    icon: "🧠",
    title: "Sports Psychology",
    description:
      "Mental training to develop champions' mindsets, overcome pressure, and achieve consistent excellence.",
    scheme: "cyan",
    gradientStart: "#22d3ee",
    gradientEnd: "#06b6d4",
    hero: "Sharpen focus, build resilience, and maintain peak performance with sport psychology tools tailored for elite athletes.",
    highlights: [
      "Visualization and goal-setting strategies",
      "Pressure management for competition day",
      "Confidence routines and performance rituals",
    ],
    focus: [
      "Mental toughness",
      "Clarity under stress",
      "Consistency in execution",
    ],
    outcomes: [
      "Clearer decision-making during events",
      "Greater composure in high-stakes moments",
      "A more confident competitive mindset",
    ],
  },
  {
    slug: "performance-analysis",
    icon: "📊",
    title: "Performance Analysis",
    description:
      "Data-driven insights using advanced biomechanics and video analysis to refine technique and strategy.",
    scheme: "purple",
    gradientStart: "#a78bfa",
    gradientEnd: "#c084fc",
    hero: "Analyze every stride, lift, and movement pattern with precision coaching technology that turns metrics into measurable growth.",
    highlights: [
      "Biomechanics review and video breakdowns",
      "Split-time analysis and pacing optimization",
      "Strength-to-power ratio assessments",
    ],
    focus: [
      "Technical refinement",
      "Objective performance metrics",
      "Strategic training adjustments",
    ],
    outcomes: [
      "Cleaner technique and faster execution",
      "Data-backed progress planning",
      "Higher performance consistency",
    ],
  },
];
