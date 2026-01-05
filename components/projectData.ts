// ---- Types ----
export interface Project {
  title: string;
  description: string;
  videoUrl: string;
  details: string;
  src: string; // desktop image
  mobileSrc?: string; // optional mobile image
  button: string;
  skills: string[];
  featured: boolean;
}

// Props for the Projects component
export interface ProjectsProps {
  isMobile: boolean;
}

// ---- Data ----
export const projects: Project[] = [
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
    title: "Cheap Games",
    description:
      "A website that finds and displays the lowest game prices available online using third-party APIs.",
    videoUrl: "/demos/Cheap Games - Google Chrome 2025-06-09 09-30-23.mp4",
    details: `
      This personal project was built using Java Spring Boot
      to integrate external APIs and fetch game pricing data.<br><br>
      View the live site:<br>
      <a href="https://cheap-games-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        https://cheap-games-frontend.vercel.app/
      </a>
    `,
    src: "/cheapGames.png",
    mobileSrc: "/cheapGames.png",
    button: "Learn More",
    skills: ["Java", "Spring Boot", "API Integration", "REST"],
    featured: false,
  },
  {
    title: "Hotel Reservation App",
    description:
      "A Java-based hotel reservation system designed as the final project for my Introduction to Java course.",
    videoUrl: "/demos/2025-05-28 15-07-33.mp4",
    details: `
      This application calculates booking costs by multiplying the nightly price
      by the number of days between the arrival and departure dates.
      The "Book It!" button was originally intended to interact with a database,
      but the database is no longer active.<br><br>
      View the code on GitHub:<br>
      <a href="https://github.com/Cacton12/Hotel_Reservation" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        https://github.com/Cacton12/Hotel_Reservation
      </a>
    `,
    src: "/HotelReservation.png",
    mobileSrc: "/HotelReservation.png",
    button: "Learn More",
    skills: ["Java", "OOP", "JavaFX"],
    featured: false,
  },

  {
    title: "Student Scores App",
    description:
      "A Windows Forms application developed as my final Object-Oriented Programming project to manage student grades.",
    videoUrl: "/demos/2025-05-28 14-55-07.mp4",
    details: `
      Built using C# and ADO.NET, this project includes multiple forms
      to input, edit, and display student scores.<br><br>
      View the code on GitHub:<br>
      <a href="https://github.com/Cacton12/Student_Scores" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        https://github.com/Cacton12/Student_Scores
      </a>
    `,
    src: "/StudentScores2.png",
    mobileSrc: "/StudentScores.png",
    button: "Learn More",
    skills: ["C#", "ADO.NET", "Windows Forms", "OOP"],
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
  button: "Learn More",
  skills: [
    "Next.js",
    "C#",
    "Cloudflare Workers",
    "Railway",
    "Cloudflare R2",
    "Azure Cosmos DB",
  ],
  featured: true,
},
];
