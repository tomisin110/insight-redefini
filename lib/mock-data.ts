export type Role = "staff" | "instructor" | "admin";

export const companies = [
  "Leo Burnett",
  "QMSL",
  "SMP",
  "AllSeasons Zenith",
  "Publicis Nourish",
  "Insight Publicis",
  "IR",
] as const;

export type Company = (typeof companies)[number];

export const jobRoles = [
  "Art Director",
  "Account Manager",
  "Copywriter",
  "Media Buying",
  "Finance Officer",
  "Media Planner",
  "Strategy",
] as const;

export type JobRole = (typeof jobRoles)[number];

export type Persona = {
  id: string;
  name: string;
  initials: string;
  role: Role;
  company: Company;
  jobRole: string;
  avatarColor: string;
  streakDays: number;
};

export const personas: Persona[] = [
  { id: "arinze", name: "Arinze Okafor", initials: "AO", role: "staff", company: "Leo Burnett", jobRole: "Account Manager", avatarColor: "bg-blue-600", streakDays: 4 },
  { id: "kemi", name: "Kemi Onatoye", initials: "KO", role: "instructor", company: "IR", jobRole: "Finance Officer", avatarColor: "bg-purple-600", streakDays: 11 },
  { id: "ayo", name: "Ayo Owoeye", initials: "AY", role: "instructor", company: "IR", jobRole: "Strategy", avatarColor: "bg-emerald-600", streakDays: 8 },
  { id: "seyi", name: "Oluwaseyi Layade", initials: "OL", role: "instructor", company: "Leo Burnett", jobRole: "Strategy", avatarColor: "bg-amber-500", streakDays: 2 },
  { id: "eniola", name: "Eniola Ogunmekan", initials: "EO", role: "instructor", company: "Publicis Nourish", jobRole: "Art Director", avatarColor: "bg-rose-500", streakDays: 6 },
  { id: "gabriel", name: "Gabriel Babatunde", initials: "GB", role: "admin", company: "IR", jobRole: "Strategy", avatarColor: "bg-slate-700", streakDays: 15 },
];

export const defaultPersona = personas[0];

export type Lesson = { id: string; title: string; durationMin: number; completed: boolean };
export type Module = { id: string; title: string; lessons: Lesson[] };

export type Material = { id: string; name: string; type: "slides" | "pdf" | "link"; url: string };

export type Course = {
  slug: string;
  title: string;
  summary: string;
  instructor: string;
  instructorTitle: string;
  department: string;
  progress: number;
  status: "not-started" | "in-progress" | "completed";
  modules: Module[];
  mandatory: boolean;
  materials: Material[];
  targetCompanies: string[]; // ["All"] or specific company names
  targetJobRoles: string[]; // ["All"] or specific job role names
  publishedAt: string;
  archived: boolean;
};

export const courses: Course[] = [
  {
    slug: "accounting-essentials",
    title: "Accounting Essentials",
    summary: "Core bookkeeping, expense coding, and the monthly close process every team lead should understand.",
    instructor: "Kemi Onatoye",
    instructorTitle: "Head of Treasury",
    department: "Treasury",
    progress: 65,
    status: "in-progress",
    mandatory: true,
    targetCompanies: ["All"],
    targetJobRoles: ["Finance Officer", "Account Manager", "Strategy"],
    publishedAt: "2026-04-02",
    archived: false,
    materials: [
      { id: "mat1", name: "Month-end close checklist.pdf", type: "pdf", url: "#" },
      { id: "mat2", name: "Accounting Essentials — slide deck", type: "slides", url: "#" },
    ],
    modules: [
      { id: "m1", title: "Reading a P&L", lessons: [
        { id: "l1", title: "Revenue vs. margin", durationMin: 8, completed: true },
        { id: "l2", title: "Common reporting mistakes", durationMin: 11, completed: true },
      ]},
      { id: "m2", title: "Expense management", lessons: [
        { id: "l3", title: "Coding expenses correctly", durationMin: 9, completed: true },
        { id: "l4", title: "Month-end close checklist", durationMin: 6, completed: false },
      ]},
    ],
  },
  {
    slug: "staff-policies-handbook-ethics",
    title: "Staff Policies, Handbook & Ethics",
    summary: "What's expected of every employee — conduct, confidentiality, and how to raise a concern.",
    instructor: "Ayo Owoeye",
    instructorTitle: "Head of HR",
    department: "Human Resources",
    progress: 20,
    status: "in-progress",
    mandatory: true,
    targetCompanies: ["All"],
    targetJobRoles: ["All"],
    publishedAt: "2026-03-15",
    archived: false,
    materials: [
      { id: "mat1", name: "Employee Handbook 2026.pdf", type: "pdf", url: "#" },
      { id: "mat2", name: "Whistleblower policy", type: "link", url: "#" },
    ],
    modules: [
      { id: "m1", title: "The employee handbook", lessons: [
        { id: "l1", title: "Code of conduct", durationMin: 10, completed: true },
        { id: "l2", title: "Confidentiality & data handling", durationMin: 12, completed: false },
      ]},
      { id: "m2", title: "Raising concerns", lessons: [
        { id: "l3", title: "Reporting a violation", durationMin: 7, completed: false },
      ]},
    ],
  },
  {
    slug: "client-pitching",
    title: "Client Pitching",
    summary: "How to structure, design, and deliver a winning client pitch — from outline to close.",
    instructor: "Oluwaseyi Layade",
    instructorTitle: "COO, Leo Burnett",
    department: "Leo Burnett",
    progress: 0,
    status: "not-started",
    mandatory: false,
    targetCompanies: ["Leo Burnett"],
    targetJobRoles: ["Account Manager", "Strategy"],
    publishedAt: "2026-05-20",
    archived: false,
    materials: [{ id: "mat1", name: "Pitch deck template.pptx", type: "slides", url: "#" }],
    modules: [
      { id: "m1", title: "Structuring the pitch", lessons: [
        { id: "l1", title: "Opening with the problem", durationMin: 7, completed: false },
        { id: "l2", title: "Building the narrative arc", durationMin: 9, completed: false },
      ]},
    ],
  },
  {
    slug: "copywriting-fundamentals",
    title: "Copywriting Fundamentals",
    summary: "Writing clear, persuasive copy for product pages, emails, and campaigns that actually convert.",
    instructor: "Eniola Ogunmekan",
    instructorTitle: "Deputy Creative Director",
    department: "Creative",
    progress: 100,
    status: "completed",
    mandatory: false,
    targetCompanies: ["Publicis Nourish", "QMSL", "SMP"],
    targetJobRoles: ["Copywriter", "Art Director"],
    publishedAt: "2026-05-28",
    archived: false,
    materials: [{ id: "mat1", name: "Brand voice guidelines", type: "link", url: "#" }],
    modules: [
      { id: "m1", title: "Writing for clarity", lessons: [
        { id: "l1", title: "Cutting the fluff", durationMin: 9, completed: true },
      ]},
    ],
  },
];

export type StaffAccount = {
  id: string;
  name: string;
  email: string;
  company: Company;
  jobRole: string;
  role: Role;
  status: "active" | "invited" | "suspended";
  coursesCompleted: number;
  coursesAssigned: number;
  avgCompletionDays: number;
  lastLogin: string;
};

export const staffAccounts: StaffAccount[] = [
  { id: "u1", name: "Arinze Okafor", email: "arinze.okafor@company.com", company: "Leo Burnett", jobRole: "Account Manager", role: "staff", status: "active", coursesCompleted: 1, coursesAssigned: 4, avgCompletionDays: 6, lastLogin: "2026-06-18" },
  { id: "u2", name: "Amara Chukwu", email: "amara.chukwu@company.com", company: "QMSL", jobRole: "Finance Officer", role: "staff", status: "active", coursesCompleted: 3, coursesAssigned: 4, avgCompletionDays: 4, lastLogin: "2026-06-19" },
  { id: "u3", name: "Bola Adeniran", email: "bola.adeniran@company.com", company: "SMP", jobRole: "Media Planner", role: "staff", status: "invited", coursesCompleted: 0, coursesAssigned: 4, avgCompletionDays: 0, lastLogin: "—" },
  { id: "u4", name: "Chidi Eze", email: "chidi.eze@company.com", company: "Publicis Nourish", jobRole: "Copywriter", role: "staff", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 3, lastLogin: "2026-06-15" },
  { id: "u5", name: "Dami Fashola", email: "dami.fashola@company.com", company: "AllSeasons Zenith", jobRole: "Media Buying", role: "staff", status: "active", coursesCompleted: 2, coursesAssigned: 4, avgCompletionDays: 5, lastLogin: "2026-06-12" },
  { id: "u6", name: "Emeka Uche", email: "emeka.uche@company.com", company: "Insight Publicis", jobRole: "Art Director", role: "staff", status: "suspended", coursesCompleted: 1, coursesAssigned: 4, avgCompletionDays: 9, lastLogin: "2026-05-30" },
  { id: "u7", name: "Tari Doulou", email: "tari.doulou@company.com", company: "QMSL", jobRole: "Strategy", role: "staff", status: "active", coursesCompleted: 2, coursesAssigned: 4, avgCompletionDays: 5, lastLogin: "2026-06-16" },
  { id: "u8", name: "Funke Adebayo", email: "funke.adebayo@company.com", company: "SMP", jobRole: "Account Manager", role: "staff", status: "active", coursesCompleted: 0, coursesAssigned: 4, avgCompletionDays: 0, lastLogin: "2026-06-08" },
  { id: "u9", name: "Kemi Onatoye", email: "kemi.onatoye@company.com", company: "IR", jobRole: "Finance Officer", role: "instructor", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 2, lastLogin: "2026-06-19" },
  { id: "u10", name: "Ayo Owoeye", email: "ayo.owoeye@company.com", company: "IR", jobRole: "Strategy", role: "instructor", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 2, lastLogin: "2026-06-19" },
  { id: "u11", name: "Oluwaseyi Layade", email: "oluwaseyi.layade@company.com", company: "Leo Burnett", jobRole: "Strategy", role: "instructor", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 1, lastLogin: "2026-06-19" },
  { id: "u12", name: "Eniola Ogunmekan", email: "eniola.ogunmekan@company.com", company: "Publicis Nourish", jobRole: "Art Director", role: "instructor", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 2, lastLogin: "2026-06-18" },
  { id: "u13", name: "Gabriel Babatunde", email: "gabriel.babatunde@company.com", company: "IR", jobRole: "Strategy", role: "admin", status: "active", coursesCompleted: 4, coursesAssigned: 4, avgCompletionDays: 1, lastLogin: "2026-06-20" },
];

export type LeaderboardEntry = {
  rank: number;
  name: string;
  company: Company;
  points: number;
  coursesCompleted: number;
  streakDays: number;
};

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Chidi Eze", company: "Publicis Nourish", points: 980, coursesCompleted: 4, streakDays: 12 },
  { rank: 2, name: "Amara Chukwu", company: "QMSL", points: 860, coursesCompleted: 3, streakDays: 9 },
  { rank: 3, name: "Dami Fashola", company: "AllSeasons Zenith", points: 710, coursesCompleted: 2, streakDays: 6 },
  { rank: 4, name: "Tari Doulou", company: "QMSL", points: 620, coursesCompleted: 2, streakDays: 5 },
  { rank: 5, name: "Arinze Okafor", company: "Leo Burnett", points: 540, coursesCompleted: 1, streakDays: 4 },
  { rank: 6, name: "Emeka Uche", company: "Insight Publicis", points: 410, coursesCompleted: 1, streakDays: 2 },
  { rank: 7, name: "Bola Adeniran", company: "SMP", points: 0, coursesCompleted: 0, streakDays: 0 },
  { rank: 8, name: "Funke Adebayo", company: "SMP", points: 0, coursesCompleted: 0, streakDays: 0 },
];

export const complianceRecords = staffAccounts
  .filter((u) => u.role === "staff")
  .map((u) => ({
    user: u.name,
    company: u.company,
    course: courses[staffAccounts.indexOf(u) % courses.length].title,
    status:
      u.coursesCompleted === 0
        ? "Not started"
        : u.coursesCompleted >= u.coursesAssigned
        ? "Completed"
        : "In progress",
    lastActive: u.lastLogin,
  }));

export const courseAnalytics = courses.map((c) => ({
  slug: c.slug,
  title: c.title,
  enrolled: staffAccounts.filter((u) => u.role === "staff").length,
  completionRate: c.progress,
  avgCompletionDays: Math.max(1, Math.round((100 - c.progress) / 18) + 2),
}));
