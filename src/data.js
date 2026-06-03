import researchNexusImage from "./assets/reasearchnexus.png";
import carpConnectImage from "./assets/carpconnect.png";
import flowForgeImage from "./assets/flowforge.png";
import finPilotImage from "./assets/finpilot-ai.png";
import airUniversityImage from "./assets/fast-DR1zqs47.jpg";
import freelanceImage from "./assets/freelnace.png";

export const navItems = ["Home", "About", "Skills", "Experience", "Education", "Projects"];

export const heroLinks = [
  {
    label: "GitHub",
    href: "https://github.com/iahmedd-k",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iahmedd-k/",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/iahmedd-k",
    icon: "x",
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/10XZkQskMHTWFDlQc-A7tdBA3Xm2UcbLy/export?format=pdf",
    icon: "doc",
    action: "resume",
  },
  {
    label: "Email",
    href: "mailto:ahmedkhanofficials@gmail.com",
    icon: "mail",
    action: "copy",
  },
];

export const resumeUrl = "https://docs.google.com/document/d/10XZkQskMHTWFDlQc-A7tdBA3Xm2UcbLy/export?format=pdf";

export const skillGroups = [
  {
    id: "core",
    title: "Core Development",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertInDark: true },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertInDark: true },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Microservices", icon: "https://cdn.simpleicons.org/amazonaws/232F3E" },
      { name: "Pinecone", icon: "https://cdn.simpleicons.org/pinecone/000000", invertInDark: true },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", invertInDark: true },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Mapbox", icon: "https://cdn.simpleicons.org/mapbox/000000", invertInDark: true },
      { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
      { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
    ],
  },
  {
    id: "ai-mlops",
    title: "AI & MLOps",
    skills: [
      { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C", invertInDark: true },
      { name: "RAG Pipelines", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Prompt Engineering", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow/0194E2" },
      { name: "Airflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
    ],
  },
];

export const experienceItems = [
  {
    id: "freelance",
    company: "Freelance Full-Stack Developer",
    role: "Remote",
    period: "2024 - Present",
    location: "Remote",
    type: "Client Work",
    initials: "FF",
    image: freelanceImage,
    accent: "from-slate-950 via-slate-800 to-zinc-700",
    points: [
      "Delivered 6 production applications across ecommerce, AI, SaaS, and landing-page use cases.",
      "Owned the full lifecycle: scoping, database design, API development, integrations, deployment, and post-launch support.",
      "Integrated Stripe, OpenAI, Mapbox, Cloudinary, and other third-party systems into client-ready products.",
      "Worked with both backend-heavy and full-stack builds, balancing product speed with reliability and maintainability.",
    ],
  },
];

export const educationItems = [
  {
    id: "air",
    school: "Air University, Islamabad",
    degree: "BS Computer Science",
    period: "6th Semester ? Expected July 2027",
    location: "Islamabad",
    meta: "3rd Year",    image: airUniversityImage,    initials: "AU",
    accent: "from-emerald-950 via-teal-900 to-cyan-800",
    points: [
      "Relevant coursework includes Data Structures & Algorithms, OOP, Database Systems, Computer Networks, Operating Systems, and Cloud/DevOps topics.",
      "Continuing to sharpen software engineering fundamentals while building production projects for real users.",
    ],
  },
];

export const projectItems = [
  {
    id: "research-nexus",
    title: "Research Nexus",
    subtitle: "AI Research Assistant",
    image: researchNexusImage,
    description:
      "A study-material RAG workspace for students and researchers: upload notes, slides, papers, or study docs, let the pipeline process and index them, then ask grounded questions from the material with streamed answers.",
    githubUrl: "https://github.com/iahmedd-k/Research-Nexus-AI-RAG_Chatbot",
    tags: ["TypeScript", "Next.js", "LangChain", "Pinecone", "OpenAI"],
    mark: "RN",
    accent: "from-slate-950 via-indigo-950 to-cyan-900",
  },
  {
    id: "carpconnect",
    title: "CarpConnect",
    subtitle: "Peer-to-Peer Carpooling",
    image: carpConnectImage,
    description:
      "A real-time carpooling platform with geospatial matching, ride-room updates, and Stripe Connect split-fare reconciliation built for live commuting flows.",
    githubUrl: "https://github.com/iahmedd-k/CarpConnect",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io", "React"],
    mark: "CC",
    accent: "from-amber-950 via-orange-900 to-rose-900",
  },
  {
    id: "flowforge",
    title: "FlowForge",
    subtitle: "Multi-Tenant SaaS",
    image: flowForgeImage,
    description:
      "A multi-tenant project management SaaS with strict workspace boundaries, RBAC across roles, and analytics powered by MongoDB aggregation pipelines.",
    githubUrl: "https://github.com/iahmedd-k/FlowForge-Multi-Tenant-Project-Management-SaaS",
    tags: ["Node.js", "Express", "MongoDB", "React", "Stripe", "Zod"],
    mark: "FF",
    accent: "from-violet-950 via-fuchsia-900 to-pink-900",
  },
  {
    id: "finpilot",
    title: "FinPilot",
    subtitle: "AI Personal Finance Assistant",
    image: finPilotImage,
    description:
      "A finance assistant that organizes transactions, forecasts cash flow, tracks goals, and uses RAG to ground AI answers in the user's own financial history.",
    githubUrl: "https://github.com/iahmedd-k/FinPilot-AI-Driven-Personal-Finance-Assistant",
    tags: ["Node.js", "React", "OpenAI", "LangChain", "Pinecone", "Stripe"],
    mark: "FP",
    accent: "from-slate-950 via-stone-900 to-neutral-800",
  },
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/iahmedd-k" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iahmedd-k/" },
];
