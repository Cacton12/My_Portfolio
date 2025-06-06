import  { Carousel } from "@/components/ui/carousel";

const projects = [
  {
    title: "Hotel Reservation App",
    description: "This is a Java application made as a final project to my introduction to java class.",
    videoUrl: "/demos/2025-05-28 15-07-33.mkv",
    details: "This app was made with Java. The calculate button takes the price per night multiplied byt the differenec between the arrival and departure dates. The Book It! button doesnt work as its suppsoed to hit a database but I no longer have one set up.",
    src: "/HotelReservation.png",
    button: "View Project",
  },
  {
    title: "Student Scores App",
    description: "This was my final project for my Object Oreintated Programming class.",
    videoUrl: "/demos/2025-05-28 14-55-07.mkv",
    details: "I used c# with ADO.NET to create multiple forms to manage studnet grades",
    src: "/StudentScores2.png",
    button: "View Project",
  },
  {
    title: "Artolog Website",
    description: "This was my capstone project at the end of my program. A team and I worked together with business analysts to add features the client wanted into artolog.ca",
    videoUrl: "demos/_ Artolog - Google Chrome 2025-05-28 15-15-39.mp4",
    details: "We used php with laravel as a framework and a SQL database ",
    src: "/artolog3.png",
    button: "View Project",
  },
  {
    title: "Networking Project",
    description: "This is a project for my networking class my  project was about DNS (Domain Name System) and how it works.",
    videoUrl: "/demos/Everything About Domain Names - Google Chrome 2025-05-28 16-29-05.mp4",
    details: "This project I had to show my knowledge of DNS but I also wanted to use only HTML and CSS to create a website.",
    src: "/ResearchProject.png",
    button: "View Project",
  },
  {
    title: "This Portfolio",
    description: "I created this portfolio as a way to present myself better than a resume and to show my skills as a developer",
    videoUrl: "/demos/Create Next App - Google Chrome 2025-05-28 18-37-01.mp4",
    details: "I create this portfolio using next.js, tailwindcss, and framer motion for the animations.",
    src: "/Portfolio2.png",
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
