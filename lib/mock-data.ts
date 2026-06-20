export type Role = "staff" | "instructor" | "admin";

export type Persona = {
  id: string;
  name: string;
  initials: string;
  role: Role;
  department: string;
  avatarColor: string; // tailwind bg class
};

export const personas: Persona[] = [
  { id: "arinze", name: "Arinze Okafor", initials: "AO", role: "staff", department: "Customer Operations", avatarColor: "bg-blue-600" },
  { id: "kemi", name: "Kemi Onatoye", initials: "KO", role: "instructor", department: "Treasury", avatarColor: "bg-purple-600" },
  { id: "ayo", name: "Ayo Owoeye", initials: "AY", role: "instructor", department: "Human Resources", avatarColor: "bg-emerald-600" },
  { id: "seyi", name: "Oluwaseyi Layade", initials: "OL", role: "instructor", department: "Leo Burnett", avatarColor: "bg-amber-500" },
  { id: "eniola", name: "Eniola Ogunmekan", initials: "EO", role: "instructor", department: "Creative", avatarColor: "bg-rose-500" },
  { id: "gabriel", name: "Gabriel Babatunde", initials: "GB", role: "admin", department: "Administration", avatarColor: "bg-slate-700" },
];

export const defaultPersona = personas[0];

export type Lesson = {
  id: string;
  title: string;
  durationMin: number;
  completed: boolean;
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

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
};

export const courses: Course[] = [
  {
    slug: "accounting-essentials",
    title: "Accounting Essentials",
    summary:
      "Core bookkeeping, expense coding, and the monthly close process every team lead should understand.",
    instructor: "Kemi Onatoye",
    instructorTitle: "Head of Treasury",
    department: "Treasury",
    progress: 65,
    status: "in-progress",
    mandatory: true,
    modules: [
      {
        id: "m1",
        title: "Reading a P&L",
        lessons: [
          { id: "l1", title: "Revenue vs. margin", durationMin: 8, completed: true },
          { id: "l2", title: "Common reporting mistakes", durationMin: 11, completed: true },
        ],
      },
      {
        id: "m2",
        title: "Expense management",
        lessons: [
          { id: "l3", title: "Coding expenses correctly", durationMin: 9, completed: true },
          { id: "l4", title: "Month-end close checklist", durationMin: 6, completed: false },
        ],
      },
    ],
  },
  {
    slug: "staff-policies-handbook-ethics",
    title: "Staff Policies, Handbook & Ethics",
    summary:
      "What's expected of every employee — conduct, confidentiality, and how to raise a concern.",
    instructor: "Ayo Owoeye",
    instructorTitle: "Head of HR",
    department: "Human Resources",
    progress: 20,
    status: "in-progress",
    mandatory: true,
    modules: [
      {
        id: "m1",
        title: "The employee handbook",
        lessons: [
          { id: "l1", title: "Code of conduct", durationMin: 10, completed: true },
          { id: "l2", title: "Confidentiality & data handling", durationMin: 12, completed: false },
        ],
      },
      {
        id: "m2",
        title: "Raising concerns",
        lessons: [{ id: "l3", title: "Reporting a violation", durationMin: 7, completed: false }],
      },
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
    modules: [
      {
        id: "m1",
        title: "Structuring the pitch",
        lessons: [
          { id: "l1", title: "Opening with the problem", durationMin: 7, completed: false },
          { id: "l2", title: "Building the narrative arc", durationMin: 9, completed: false },
        ],
      },
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
    modules: [
      {
        id: "m1",
        title: "Writing for clarity",
        lessons: [{ id: "l1", title: "Cutting the fluff", durationMin: 9, completed: true }],
      },
    ],
  },
];

export const complianceRecords = [
  { user: "Arinze Okafor", department: "Customer Operations", course: "Staff Policies, Handbook & Ethics", status: "In progress", lastActive: "2026-06-18" },
  { user: "Amara Chukwu", department: "Finance", course: "Accounting Essentials", status: "Completed", lastActive: "2026-06-10" },
  { user: "Bola Adeniran", department: "Sales", course: "Client Pitching", status: "Not started", lastActive: "—" },
  { user: "Chidi Eze", department: "Marketing", course: "Copywriting Fundamentals", status: "Completed", lastActive: "2026-06-15" },
  { user: "Dami Fashola", department: "Compliance", course: "Staff Policies, Handbook & Ethics", status: "Completed", lastActive: "2026-06-12" },
  { user: "Emeka Uche", department: "Finance", course: "Accounting Essentials", status: "In progress", lastActive: "2026-06-17" },
];
