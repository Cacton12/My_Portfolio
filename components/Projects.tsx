import  { Carousel } from "@/components/ui/carousel";

const projects = [
  {
    title: "Project One",
    description: "This is a detailed description of Project One. It explains the features and goals.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // example video
    details: "More details here",
    src: "/Screenshot 2025-04-29 175745.png",
    button: "View Project",
  },
  {
    title: "Project One",
    description: "This is a detailed description of Project One. It explains the features and goals.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // example video
    details: "More details here",
    src: "/Screenshot 2025-04-29 175745.png",
    button: "View Project",
  },
  {
    title: "Project One",
    description: "This is a detailed description of Project One. It explains the features and goals.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // example video
    details: "More details here",
    src: "/Screenshot 2025-04-29 175745.png",
    button: "View Project",
  },
  {
    title: "Wanted",
    description: "This is a detailed description of Project One. It explains the features and goals.",
    videoUrl: "https://www.youtube.com/watch?v=ZfpmPMZcEmo&ab_channel=Wanted", // example video
    details: "More details here",
    src: "/Screenshot 2025-04-29 175745.png",
    button: "View Project",
  },
  {
    title: "Project One",
    description: "This is a detailed description of Project One. It explains the features and goals.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // example video
    details: "More details here",
    src: "/Screenshot 2025-04-29 175745.png",
    button: "View Project",
  },
  
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8"
    id="projects"
    >
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>
      <Carousel slides={projects} />
    </div>
  );
}
