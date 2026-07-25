import aiInterview from "@/assets/AI-Interview.png";
import desiHaat from "@/assets/desi-hat.png";
import bloodLink from "@/assets/blood-link.png";
import ideaVault from "@/assets/IdeaVault.png";
import skillsphere from "@/assets/skills-phere-crop.png";
import keenkeeper from "@/assets/keenkeeper.png";
import digitools from "@/assets/DigiTools-Platform-crop.png";
import issuetracker from "@/assets/issue-tracker-crop.png";

export const projects = [
  {
    id: "ai-interview",
    title: "AI Interview",
    description:
      "An AI-powered mock interview platform where an adaptive AI interviewer asks real-time follow-up questions based on your answers and delivers a scored feedback report.",
    image: aiInterview,
    imagePosition: "center 72%",
    live: "https://ai-interview-1-theta.vercel.app",
    github: "https://github.com/fatematz/AI-Interview",
    githubServer: "https://github.com/fatematz/AI-Interview-Server-1",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Better Auth",
      "Express 5",
      "MongoDB",
      "Groq (Llama 3.3)",
    ],
    featured: true,
    challenges:
      "Handling unpredictable LLM output was the biggest challenge — the AI returns free-form text, but the app needed structured data (a 0–10 score plus written feedback), which required careful prompt engineering and a strict parsing layer so malformed responses wouldn't crash the app. Authentication across two separate services was another hurdle: login happens via Better Auth on the frontend, but the API runs on a separate Express server, so the server had to verify JWTs against the frontend's JWKS endpoint using jose — getting the CLIENT_URL/AUTH_URL wrong in production broke both CORS and auth. Resume-based question generation also took iteration: PDFs are uploaded via Multer, parsed to text with pdf-parse, and turned into 8 relevant, personalized interview questions from that often-noisy extracted text. The 3D hero built with Three.js/React Three Fiber added meaningful bundle size, so first-load and mobile performance needed dedicated optimization.",
    futurePlans:
      "Add interview recording playback with timestamped feedback, support multiple interview modes (technical, behavioral, HR), let candidates track progress across sessions with trend charts, and extend the resume parser to support DOCX and multiple languages.",
  },
  {
    id: "desi-haat",
    title: "Desi Haat",
    description:
      "A full-stack marketplace for Bangladesh's district-famous local products — like Rajshahi silk and Bogura doi — with browsing, filtering, reviews, Stripe checkout, and seller tools.",
    image: desiHaat,
    imagePosition: "center 72%",
    live: "https://desi-haat.vercel.app",
    github: "https://github.com/fatematz/Desi-Haat",
    githubServer: "https://github.com/fatematz/Desi-Haat-Server",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Better Auth",
      "Stripe",
      "Express 5",
      "MongoDB Atlas",
    ],
    featured: true,
    challenges:
      "Implementing the full Stripe Checkout payment flow — creating sessions, handling redirects, managing success/cancel states, and updating order status after payment confirmation — took careful handling, and moving from test keys to live keys required separate configuration. Optimizing multi-filter search was another challenge: keyword search, category, district, price range, sorting, and pagination all needed to combine efficiently into a single MongoDB query, with pagination resetting correctly whenever a filter changed. The hybrid architecture — authentication in Next.js API routes, business logic on a separate Express server — made keeping session/JWT state in sync between the two the trickiest part. Since the same user can be both a buyer and a seller, protected routes like /items/add and /items/manage needed ownership checks enforced on the backend, not just hidden in the UI.",
    futurePlans:
      "Add order tracking with delivery status updates, a ratings-based seller trust score, wishlist and price-drop alerts, and a dedicated seller analytics dashboard showing sales trends by district and category.",
  },
  {
    id: "bloodlink",
    title: "BloodLink",
    description:
      "A blood donation platform that connects donors with people in urgent need of blood, featuring separate dashboards for donors, volunteers, and admins.",
    image: bloodLink,
    imagePosition: "center 72%",
    live: "https://blood-link-chi-wine.vercel.app",
    github: "https://github.com/fatematz/BloodLink",
    githubServer: "https://github.com/fatematz/BloodLink-server",
    tags: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Better Auth",
      "Stripe",
      "Express 5",
      "MongoDB Atlas",
      "JWT",
    ],
    featured: true,
    challenges:
      "Building three-tier role-based access control was the core challenge — the permission matrix is nuanced (a volunteer can update any request's status but can't edit or delete someone else's request), and these rules had to be enforced on every API route, not just hidden in the UI. Modeling donation status as a proper state machine (pending → in-progress → done/canceled) meant blocking invalid transitions like done reverting to pending, and avoiding race conditions on concurrent updates. Building cascading District → Upazila dropdowns required loading and structuring Bangladesh's full location dataset, then using it to power donor search filters. Tracking Stripe-based funding history and computing aggregate admin statistics (total donors, funding, requests) added another layer of complexity.",
    futurePlans:
      "Add SMS/push notifications for urgent blood requests near a donor's location, a donor eligibility countdown based on last donation date, blood bank inventory tracking, and geolocation-based donor matching.",
  },
  {
    id: "ideavault",
    title: "IdeaVault",
    description:
      "A platform where founders share startup ideas, get community feedback through comments, and connect with investors.",
    image: ideaVault,
    imagePosition: "center 72%",
    live: "https://idea-vault-delta.vercel.app",
    github: "https://github.com/fatematz/idea-vault",
    githubServer: "https://github.com/fatematz/ideaVault-server2",
    tags: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Better Auth",
      "HeroUI",
      "Express 5",
      "MongoDB",
    ],
    featured: true,
    challenges:
      "Combining search, filtering, and pagination was trickier than expected — changing one would break the others, so all the related state had to be managed together rather than independently. Defining 'trending' required a real decision: should it be based on comment count or recency? That choice shaped how the underlying query was built. Ownership-based edit/delete needed to be enforced properly — hiding the button on the client wasn't enough, so the server also verifies the requester owns the idea before allowing changes. The biggest time sink was bridging Better Auth with a separate Express server: sessions are created on the frontend but verified on the server using jose-cjs, and getting that handshake reliable took the most iteration.",
    futurePlans:
      "Add investor-specific accounts with saved/bookmarked ideas, idea versioning so founders can show how a concept evolved, an upvote-based ranking system, and direct messaging between founders and interested investors.",
  },
  {
    id: "skillsphere",
    title: "SkillSphere",
    description:
      "A full-stack online course platform where learners can discover courses, learn from top instructors, and manage their accounts with secure authentication.",
    image: skillsphere,
    imagePosition: "center 72%",
    live: "https://skills-phere.vercel.app",
    github: "https://github.com/fatematz/skills-phere",
    tags: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS", "DaisyUI"],
    featured: false,
    challenges:
      "Implementing secure session management with Better Auth was complex, especially handling token refresh flows and protecting server-side routes. Structuring the MongoDB schema to efficiently relate courses, instructors, and enrolled users also required careful planning to avoid deeply nested queries.",
    futurePlans:
      "Add a real-time progress tracker for learners, integrate a payment gateway for paid courses, and introduce an instructor dashboard with analytics. A mobile app version using React Native is also on the roadmap.",
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    description:
      "A relationship management app that helps you stay connected with people who matter most — tracks interactions, reminds you to reconnect, and logs every check-in.",
    image: keenkeeper,
    imagePosition: "center 72%",
    live: "https://keen-keeper-3icm.vercel.app",
    github: "https://github.com/fatematz/keen-keeper",
    tags: ["Next.js", "React", "Recharts", "Tailwind CSS"],
    featured: false,
    challenges:
      "Designing an intuitive UX for logging interactions without making it feel like a chore was a core challenge. Building the Recharts visualizations to accurately reflect relationship frequency over dynamic time ranges also took several iterations to get right.",
    futurePlans:
      "Integrate calendar sync (Google Calendar) for automatic check-in reminders, add AI-generated conversation starters based on past interaction history, and introduce a shared mode for teams to manage client relationships collaboratively.",
  },
  {
    id: "digitools",
    title: "DigiTools Platform",
    description:
      "A tab-based digital marketplace web app where users can browse premium digital tools, add to cart, and manage purchases with a dynamic real-time interface.",
    image: digitools,
    imagePosition: "center 72%",
    live: "https://a-6-digitools-platform.netlify.app",
    github: "https://github.com/fatematz/DigiTools-Platform",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
    featured: false,
    challenges:
      "Managing cart state across multiple tabs and categories without a global state library required careful prop drilling and local state design. Keeping the UI responsive and performant while filtering large product lists was another hurdle solved through memoization.",
    futurePlans:
      "Migrate state management to Zustand or Redux for scalability, add a user authentication flow with purchase history, and connect to a real backend with Stripe for actual transactions.",
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    description:
      "A GitHub-themed issues tracker web app with login authentication, allowing users to manage and track GitHub issues through a clean dashboard interface.",
    image: issuetracker,
    imagePosition: "center 72%",
    live: "https://fatematz.github.io/Assignment-5/",
    github: "https://github.com/fatematz/Assignment-5",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    challenges:
      "Building a fully functional auth flow and dynamic issue management using only vanilla JavaScript — without any framework — required careful DOM manipulation and state tracking using localStorage. Replicating GitHub's UI fidelity with pure CSS was also time-intensive.",
    futurePlans:
      "Rebuild with React for better component architecture, integrate the real GitHub REST API to pull live issues, and add label filtering, priority sorting, and drag-and-drop issue reordering.",
  },
];
