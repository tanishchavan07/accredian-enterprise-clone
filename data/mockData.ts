export interface Program {
  id: string;
  title: string;
  university: string;
  duration: string;
  enrolled: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Partner {
  id: string;
  abbreviation: string;
  name: string;
}

export const programs: Program[] = [
  {
    id: "p1",
    title: "Data Science & AI",
    university: "IIT Delhi",
    duration: "6 months",
    enrolled: "500+",
    description:
      "Master machine learning, deep learning, and data engineering pipelines with hands-on capstone projects.",
    tags: ["Python", "ML", "Deep Learning"],
  },
  {
    id: "p2",
    title: "Product Management",
    university: "IIM Bangalore",
    duration: "4 months",
    enrolled: "300+",
    description:
      "Build product strategy, roadmapping, and stakeholder management skills under IIM faculty and industry mentors.",
    tags: ["Strategy", "Roadmapping", "Agile"],
  },
  {
    id: "p3",
    title: "Machine Learning Engineering",
    university: "IIT Bombay",
    duration: "5 months",
    enrolled: "400+",
    description:
      "Go from model building to production-grade ML systems — pipelines, MLOps, and scalable deployments.",
    tags: ["MLOps", "PyTorch", "Kubernetes"],
  },
  {
    id: "p4",
    title: "Business Analytics",
    university: "IIM Calcutta",
    duration: "3 months",
    enrolled: "600+",
    description:
      "Drive data-driven decisions with advanced analytics, SQL, Tableau, and business case frameworks.",
    tags: ["SQL", "Tableau", "Statistics"],
  },
  {
    id: "p5",
    title: "Full Stack Development",
    university: "BITS Pilani",
    duration: "6 months",
    enrolled: "350+",
    description:
      "Build end-to-end web applications with modern JavaScript, cloud deployment, and system design.",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: "p6",
    title: "Leadership & Strategy",
    university: "IIM Ahmedabad",
    duration: "4 months",
    enrolled: "200+",
    description:
      "Develop executive leadership, negotiation, and strategic thinking skills with IIMA's world-class faculty.",
    tags: ["Leadership", "Strategy", "Executive"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Sharma",
    role: "CHRO",
    company: "TechCorp India",
    initials: "PS",
  },
  {
    id: "t2",
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Rajesh Kumar",
    role: "VP Engineering",
    company: "FinServe",
    initials: "RK",
  },
  {
    id: "t3",
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96%.",
    name: "Anita Desai",
    role: "L&D Head",
    company: "GlobalConsult",
    initials: "AD",
  },
];

export const features: Feature[] = [
  {
    id: "f1",
    icon: "🎓",
    title: "University-Co-Created Programs",
    description:
      "Access a library of programs co-created with IITs, IIMs, and global top-tier universities.",
  },
  {
    id: "f2",
    icon: "📊",
    title: "Live Analytics Dashboard",
    description:
      "Track completion rates, assessment scores, and ROI through a real-time enterprise dashboard.",
  },
  {
    id: "f3",
    icon: "🧑‍🏫",
    title: "Expert Mentorship",
    description:
      "Industry experts guide your team through capstone projects and weekly live sessions.",
  },
  {
    id: "f4",
    icon: "👥",
    title: "Cohort-Based Learning",
    description:
      "Foster team collaboration with synchronized learning paths and peer communities.",
  },
  {
    id: "f5",
    icon: "🛠️",
    title: "Custom Curriculum",
    description:
      "Tailor every module to your organization's specific tech stack, tools, and business goals.",
  },
  {
    id: "f6",
    icon: "🏆",
    title: "Recognized Certifications",
    description:
      "Earn industry-recognized certificates that significantly boost employee retention and morale.",
  },
  {
    id: "f7",
    icon: "🤖",
    title: "AI-Powered Learning Paths",
    description:
      "Adaptive AI-driven paths that continuously adjust to each learner's pace and skill level.",
  },
  {
    id: "f8",
    icon: "🌍",
    title: "Global Team Support",
    description:
      "Seamlessly upskill distributed teams across time zones with async-first course design.",
  },
];

export const stats: Stat[] = [
  { id: "s1", value: "500+", label: "Enterprise Clients" },
  { id: "s2", value: "94%", label: "Average Completion Rate" },
  { id: "s3", value: "1,200+", label: "Industry Mentors" },
  { id: "s4", value: "50+", label: "University Partners (IITs, IIMs)" },
];

export const partners: Partner[] = [
  { id: "pt1", abbreviation: "IIT Delhi", name: "Indian Institute of Technology Delhi" },
  { id: "pt2", abbreviation: "IIT Bombay", name: "Indian Institute of Technology Bombay" },
  { id: "pt3", abbreviation: "IIM Bangalore", name: "Indian Institute of Management Bangalore" },
  { id: "pt4", abbreviation: "IIM Calcutta", name: "Indian Institute of Management Calcutta" },
  { id: "pt5", abbreviation: "IIM Ahmedabad", name: "Indian Institute of Management Ahmedabad" },
  { id: "pt6", abbreviation: "BITS Pilani", name: "Birla Institute of Technology and Science" },
  { id: "pt7", abbreviation: "IIT Madras", name: "Indian Institute of Technology Madras" },
  { id: "pt8", abbreviation: "SP Jain", name: "SP Jain School of Global Management" },
];
