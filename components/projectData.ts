// ---- Types ----
export interface Project {
  title: string;
  description: string;
  videoUrl: string;
  details: string;
  src: string;
  mobileSrc?: string;
  button: string;
  skills: string[];
  featured: boolean;
  liveUrl?: string;
}

export interface ProjectsProps {
  isMobile: boolean;
}

// ---- Data ----
export const projects: Project[] = [
  {
    title: "FlashChat AI",
    description:
      "A fast, responsive AI chatbot powered by Gemini 3 Flash Preview, designed for real-time conversations and code assistance.",
    videoUrl: "/demos/temp.mp4",
    details: `
    FlashChat AI demonstrates my ability to integrate modern large language models into a polished, real-time web application.
    The chatbot leverages multiple Google AI models such as Gemini 3 and Gemma 3. All of this was made for free I did this by detecting when a free tier limit was hit and changing models.<br><br>
    Built with Next.js (App Router), React, Tailwind CSS, and streaming API responses to deliver a smooth, chat-style user experience with optimized performance and clean UI design.<br><br>
    View the code on GitHub:<br>
    <a href="https://github.com/Cacton12/chatbot_website" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
      https://github.com/Cacton12/chatbot_website
    </a>
  `,
    src: "/ChatbotScreenshot.jpg",
    mobileSrc: "/ChatbotScreenshot.jpg",
    button: "Learn more",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Gemini API",
      "Streaming Responses",
      "AI",
      "JavaScript",
    ],
    featured: false,
    liveUrl: "https://flashchat-xi.vercel.app/",
  },
  {
    title: "AI Background Remover",
    description:
      "A web app that instantly removes image backgrounds locally in the browser using AI, ensuring user privacy without server uploads.",
    videoUrl:
      "/demos/Background Remover AI - Google Chrome 2026-01-07 13-08-08.mp4",
    details: `
    This project showcases my ability to integrate AI models into a frontend application, allowing users to remove image backgrounds instantly without sending data to a server. 
    Built with React, Tailwind CSS, Web Workers, and transformers.js for performant local AI processing.<br><br>
    View the code on GitHub:<br>
    <a href="https://github.com/Cacton12/ai_website" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
      https://github.com/Cacton12/ai_website
    </a>
  `,
    src: "/Background_Gone.png",
    mobileSrc: "/Background_Gone.png",
    button: "Learn more",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Web Workers",
      "AI",
      "transformers.js",
    ],
    featured: false,
    liveUrl: "https://ai-website-navy-one.vercel.app/",
  },

  {
    title: "Artolog.ca",
    description:
      "A capstone project where my team collaborated with business analysts to implement new features for the Artolog.ca platform.",
    videoUrl: "/demos/_ Artolog - Google Chrome 2025-05-28 15-15-39.mp4",
    details: `
      We used PHP with the Laravel framework alongside a SQL database
      to develop and deploy client-requested features in an agile team environment.<br><br>
      Visit the website:<br>
      <a href="https://artolog.ca/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        https://artolog.ca/
      </a>
    `,
    src: "/artolog3.png",
    mobileSrc: "/artolog.png",
    button: "Learn More",
    skills: [
      "PHP",
      "Laravel",
      "SQL",
      "Backend Development",
      "Team Collaboration",
      "Agile",
    ],
    featured: false,
  },
  {
    title: "Networking Project",
    description:
      "A research-based site explaining DNS (Domain Name System) concepts, built using only HTML and CSS.",
    videoUrl:
      "/demos/Everything About Domain Names - Google Chrome 2025-05-28 16-29-05.mp4",
    details: `
      This educational project demonstrates my understanding of DNS concepts while
      highlighting my ability to create a clean, static webpage using core web technologies.<br><br>
      View the code on GitHub:<br>
      <a href="https://github.com/Cacton12/Research_Project" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        https://github.com/Cacton12/Research_Project
      </a>
    `,
    src: "/ResearchProject.png",
    mobileSrc: "/ResearchProject.png",
    button: "Learn More",
    skills: ["HTML", "CSS"],
    featured: false,
  },
  {
    title: "Photo Storage App",
    description:
      "I have built a full-stack photo storage web app that allows users to upload, store, and manage images securely in the cloud. The app is fully functional and ready for use, offering a seamless and secure experience for managing photos.",
    videoUrl: "/demos/React App - Google Chrome 2025-12-01 09-01-54.mp4",
    details: `
    Built using Next.js for the frontend and C# for the backend, with Cloudflare Workers serving as a middle layer and Railway hosting the backend. 
    Images are stored in Cloudflare R2 buckets, while user data and photo links are managed in Azure Cosmos DB.<br><br>
    Upload flow: users upload an image via the frontend → Cloudflare Workers (middle layer) → C# backend → Cloudflare R2 storage → Cosmos DB for metadata → backend forwards the response → returned to the frontend through the middle layer.<br><br>
    Key features include secure photo uploads, cloud storage integration, and a responsive, intuitive UI.<br><br>
    View the code on GitHub:<br>
    <a href="https://github.com/Cacton12/storage_web_app" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
      https://github.com/Cacton12/storage_web_app
    </a><br>
    <a href="https://github.com/Cacton12/StorageWebAppBackend" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
      https://github.com/Cacton12/StorageWebAppBackend
    </a>
  `,
    src: "/Photo_Storage_App.png",
    mobileSrc: "/Photo_Storage_App.png",
    button: "Learn more",
    skills: [
      "Next.js",
      "C#",
      "Cloudflare Workers",
      "Railway",
      "Cloudflare R2",
      "Azure Cosmos DB",
    ],
    featured: true,
    liveUrl: "https://storage-web-app2.vercel.app/",
  },
];
