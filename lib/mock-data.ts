export type Role = "learner" | "instructor" | "admin";

export const currentUser = {
  name: "Adaeze Okonkwo",
  role: "learner" as Role,
  department: "Customer Operations",
};

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
  progress: number; // 0-100
  status: "not-started" | "in-progress" | "completed";
  modules: Module[];
  mandatory: boolean;
};

export const courses: Course[] = [
  {
    slug: "data-protection-fundamentals",
    title: "Data Protection Fundamentals",
    summary:
      "How we classify, handle, and store sensitive company and customer data — required for all staff.",
    instructor: "Tunde Bakare",
    instructorTitle: "Chief Information Officer",
    department: "Compliance",
    progress: 65,
    status: "in-progress",
    mandatory: true,
    modules: [
      {
        id: "m1",
        title: "Classifying information",
        lessons: [
          { id: "l1", title: "Public vs internal vs restricted", durationMin: 8, completed: true },
          { id: "l2", title: "Handling customer records", durationMin: 11, completed: true },
        ],
      },
      {
        id: "m2",
        title: "Incident response",
        lessons: [
          { id: "l3", title: "Recognising a breach", durationMin: 9, completed: true },
          { id: "l4", title: "Who to notify, and when", durationMin: 6, completed: false },
        ],
      },
    ],
  },
  {
    slug: "leading-through-change",
    title: "Leading Through Change",
    summary:
      "A management primer on guiding teams through restructuring, drawn from this year's leadership offsite.",
    instructor: "Folake Adeyemi",
    instructorTitle: "VP, People & Culture",
    department: "Leadership",
    progress: 20,
    status: "in-progress",
    mandatory: false,
    modules: [
      {
        id: "m1",
        title: "Reading the room",
        lessons: [
          { id: "l1", title: "Signals of team anxiety", durationMin: 10, completed: true },
          { id: "l2", title: "Setting expectations early", durationMin: 12, completed: false },
        ],
      },
    ],
  },
  {
    slug: "customer-escalations-playbook",
    title: "Customer Escalations Playbook",
    summary: "Step-by-step handling of tier-2 and tier-3 customer escalations across all regions.",
    instructor: "Michael Eze",
    instructorTitle: "Head of Customer Operations",
    department: "Operations",
    progress: 0,
    status: "not-started",
    mandatory: true,
    modules: [
      {
        id: "m1",
        title: "Triage",
        lessons: [
          { id: "l1", title: "Severity levels explained", durationMin: 7, completed: false },
          { id: "l2", title: "First response templates", durationMin: 5, completed: false },
        ],
      },
    ],
  },
  {
    slug: "financial-controls-101",
    title: "Financial Controls 101",
    summary: "Approval thresholds, expense policy, and the controls finance expects every manager to know.",
    instructor: "Grace Ibe",
    instructorTitle: "Chief Financial Officer",
    department: "Finance",
    progress: 100,
    status: "completed",
    mandatory: true,
    modules: [
      {
        id: "m1",
        title: "Approval thresholds",
        lessons: [{ id: "l1", title: "Who can approve what", durationMin: 9, completed: true }],
      },
    ],
  },
];

export const instructorCourses = courses.filter((c) =>
  ["Tunde Bakare", "Folake Adeyemi"].includes(c.instructor)
);

export const complianceRecords = [
  { user: "Adaeze Okonkwo", department: "Customer Operations", course: "Data Protection Fundamentals", status: "In progress", lastActive: "2026-06-18" },
  { user: "Ifeoma Chukwu", department: "Finance", course: "Financial Controls 101", status: "Completed", lastActive: "2026-06-10" },
  { user: "Chidi Eze", department: "Customer Operations", course: "Customer Escalations Playbook", status: "Not started", lastActive: "—" },
  { user: "Bisi Lawal", department: "Leadership", course: "Leading Through Change", status: "Completed", lastActive: "2026-06-15" },
  { user: "Sade Bello", department: "Compliance", course: "Data Protection Fundamentals", status: "Completed", lastActive: "2026-06-12" },
];
