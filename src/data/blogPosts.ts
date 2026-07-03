export type BlogCategory = "projects" | "lifestyle" | "sports" | "tech" | "travel";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  /** Optional real image. If missing, a typographic cover is rendered. */
  thumbnail?: string;
  /** Short label shown on the typographic cover. */
  cover?: { label: string; accent?: "amber" | "blue" | "green" | "red" | "violet" };
  category: BlogCategory;
  date: string;
  readTime: string;
  content: string; // HTML string
}

export const categories: { value: BlogCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "projects", label: "Projects" },
  { value: "tech", label: "Tech" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "sports", label: "Sports" },
  { value: "travel", label: "Travel" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "imc-prosperity-4",
    title: "IMC Prosperity 4: #2 in Romania",
    description: "Two weeks of market making, bad assumptions, and rewriting strategies at 3am. Top 300 worldwide out of 22,600 teams.",
    cover: { label: "prosperity_4.log", accent: "amber" },
    category: "tech",
    date: "2026-05-10",
    readTime: "3 min",
    content: `
      <p>IMC Prosperity is a two-week algorithmic trading contest run by IMC. 22,600 teams, five rounds, a new twist every round. We finished <strong>2nd in Romania and around 300 worldwide</strong>.</p>
      <h2>What the rounds actually feel like</h2>
      <p>Every Monday the organizers drop a new market: sometimes it's a plain order book, sometimes options, sometimes a barter puzzle. You get a few days to write bots, backtest, and submit. Then the leaderboard resets your ego.</p>
      <h2>What worked</h2>
      <p>Small, boring market-making bots that we understood end-to-end. The clever strategies we couldn't fully explain always broke first. Position limits and inventory skew mattered more than fancy signals.</p>
      <h2>What didn't</h2>
      <p>Overfitting to the sample data. Trusting a strategy because the PnL curve looked pretty. Not sleeping before submission deadlines.</p>
      <p>Built with Mihai Calin, Draghici Robert, and Mihai-Florin Vijulie. Would do it again next year.</p>
    `,
  },
  {
    id: "elixir-summer-school",
    title: "A Week of Elixir, LiveView and GenServer",
    description: "First real functional language after years of C and Java. Notes from PDQ's summer school.",
    cover: { label: "iex>", accent: "violet" },
    category: "tech",
    date: "2026-08-15",
    readTime: "2 min",
    content: `
      <p>Signed up because I wanted a functional language that I would actually use, not just read about. Elixir won on the strength of the BEAM and how casual concurrency looks in it.</p>
      <h2>The parts that clicked</h2>
      <p>Pattern matching everywhere. Pipes reading top-to-bottom like a shell script. GenServer making "just spin up a process" a boringly normal thing to do.</p>
      <h2>The parts that didn't (yet)</h2>
      <p>LiveView is magical until you try to reason about socket state across three components. I'll need a real project to get comfortable with it.</p>
      <p>We ended the week with a small hackathon extending a game we'd built. Nothing shipped, but the mental model stuck.</p>
    `,
  },
  {
    id: "hard-soft-2025",
    title: "Hard & Soft 2025: 4th Place",
    description: "An autonomous maze robot on a Raspberry Pi, with LiDAR, YOLO, and comms we hid inside images.",
    cover: { label: "H&S/2025", accent: "green" },
    category: "projects",
    date: "2025-05-28",
    readTime: "3 min",
    content: `
      <p>Hard & Soft is a week-long robotics contest where you get a problem statement, some hardware, and no sleep. We placed <strong>4th internationally</strong>.</p>
      <h2>The robot</h2>
      <p>MentorPi base (Raspberry Pi 5, LiDAR, camera). DFS to explore the maze, odometry plus LiDAR to keep position, PID on Mecanum wheels for holonomic movement. A YOLOv11n classifier told alcohol from water on the shelves.</p>
      <h2>The parts we're proud of</h2>
      <p>A 3D-printed rack-and-pinion arm to lower a Hall sensor onto the floor and detect magnetic exits. Comms hidden inside image frames via LSB steganography, on top of Fernet + RSA. Overkill? Sure. Fun? Also yes.</p>
      <p>The organizers' router had no open ports, so we set up a reverse SSH tunnel to a remote proxy and served the dashboard over HTTPS from there.</p>
      <h2>The stack</h2>
      <p>ROS 2 for sensors, a bridge node consolidating everything, PostgreSQL in Docker for the archive, and a custom dashboard with YOLO overlays and live trajectory. Google OAuth in front because why not.</p>
    `,
  },
  {
    id: "smart-passive-house",
    title: "A Smart Passive House Project",
    description: "Long-running side project: an intelligent house that handles the boring decisions so I don't have to.",
    cover: { label: "home.ctrl", accent: "blue" },
    category: "projects",
    date: "2025-07-04",
    readTime: "3 min",
    content: `
      <p>The idea is simple: a house that manages the small, repetitive decisions on its own. Climate, lights, security, energy. Nothing revolutionary, just well engineered.</p>
      <h2>How it's built</h2>
      <p>Spring Boot backend in Docker with MySQL. A Raspberry Pi 3 as the local controller. Sensors (temperature, CO₂, humidity, light) live on an STM32 NUCLEO and talk to the Pi over serial through a small C library I wrote for JSON messages. New sensors plug in without touching the central logic.</p>
      <h2>Security</h2>
      <p>RFID on doors, camera at the garage. Off-the-shelf license plate models didn't handle Romanian plates well, so I trained a small YOLO on a local dataset. The garage now opens only for cars it recognizes.</p>
      <h2>Next</h2>
      <p>Energy management on the passive-house side, and moving the climate loop from reactive to predictive.</p>
    `,
  },
  {
    id: "jobsaw-ai",
    title: "JobSaw: An Agent for Job Applications",
    description: "A LangGraph pipeline that reads a job posting, tailors my CV, and drafts a cover letter I can actually send.",
    cover: { label: "jobsaw()", accent: "red" },
    category: "tech",
    date: "2025-02-01",
    readTime: "3 min",
    content: `
      <p>I was applying to a lot of things and tailoring each CV by hand. Boring, error-prone, and slow. JobSaw is the small tool I built to fix that for myself.</p>
      <h2>How it works</h2>
      <p>A LangGraph graph in Python: parse the posting, pull out requirements, match them against a structured version of my experience, then produce a tailored CV and a first-draft cover letter. Frontend is a thin React UI.</p>
      <h2>What I actually use it for</h2>
      <p>Not to auto-send anything. It gives me a starting point that's 80% there, and I fix the last 20% by hand. That last 20% is where the letter stops sounding like a bot.</p>
    `,
  },
];
