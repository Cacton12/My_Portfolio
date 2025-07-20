import  { Carousel } from "@/components/ui/carousel";

const projects = [
  {
    title: "Hotel Reservation App",
    description: "This is a Java application made as a final project to my introduction to java class.",
    videoUrl: "/demos/2025-05-28 15-07-33.mkv",
    details: `This app was made with Java. The calculate button takes the price per night multiplied by the difference between the arrival and departure dates. The Book It! button doesnt work as its suppsoed to hit a database but I no longer have one set up.<br> To view the code in github:<br><a href="https://github.com/Cacton12/Hotel_Reservation" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://github.com/Cacton12/Hotel_Reservation</a>`,
    src: "/HotelReservation.png",
    button: "View Project",
  },
  {
    title: "Student Scores App",
    description: "This was my final project for my Object Oreintated Programming class.",
    videoUrl: "/demos/2025-05-28 14-55-07.mkv",
    details: `I used c# with ADO.NET to create multiple forms to manage studnet grades.<br> To view the code in github:<br><a href="https://github.com/Cacton12/Student_Scores" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://github.com/Cacton12/Student_Scores</a>`,
    src: "/StudentScores2.png",
    button: "View Project",
  },
    {
    title: "Cheap Games",
    description: "Website I created to give the cheapest game prices",
    videoUrl: "demos/Cheap Games - Google Chrome 2025-06-09 09-30-23.mp4",
    details: `This was a fun personal project I did. I wanted to try using Java Spring Boot to fetch APIs.<br> To view the actual site click here:<br><a href="https://cheap-games-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://cheap-games-frontend.vercel.app/</a>`,
    src: "/cheapGames.png",
    button: "View Project",
  },
    {
    title: "Artolog Website",
    description: "This was my capstone project at the end of my program. A team and I worked together with business analysts to add features the client wanted into artolog.ca",
    videoUrl: "demos/_ Artolog - Google Chrome 2025-05-28 15-15-39.mp4",
    details: `We used php with laravel as a framework and a SQL database.<br> To view the actual site click here:<br><a href="https://artolog.ca/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://artolog.ca/</a>`,
    src: "/artolog3.png",
    button: "View Project",
  },
  {
    title: "Networking Project",
    description: "This is a project for my networking class my  project was about DNS (Domain Name System) and how it works.",
    videoUrl: "/demos/Everything About Domain Names - Google Chrome 2025-05-28 16-29-05.mp4",
    details: `This project I had to show my knowledge of DNS but I also wanted to use only HTML and CSS to create a website. <br> To view the code in github:<br><a href="https://github.com/Cacton12/Research_Project" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://github.com/Cacton12/Research_Project</a>`,
    src: "/ResearchProject.png",
    button: "View Project",
  },
  {
    title: "This Portfolio",
    description: "I created this portfolio as a way to present myself better than a resume and to show my skills as a developer",
    videoUrl: "/demos/Create Next App - Google Chrome 2025-05-28 18-37-01.mp4",
    details: `I create this portfolio using next.js, tailwindcss, and framer motion for the animations. <br> To view the code in github: <br><a href="https://github.com/Cacton12/My_Portfolio" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">https://github.com/Cacton12/My_Portfolio</a>`,
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
