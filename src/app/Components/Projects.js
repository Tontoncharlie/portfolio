import ProjectCard from "./ProjectCard";

const images = [
  "/project-images/project.1-1.png",
  "/project-images/project.1-2.png",
  "/project-images/project.1-3.png",
  "/project-images/project.1-4.png",
  "/project-images/project.1-5.png",
  "/project-images/project.1-6.png",
];

export default function Projects() {
  return (
    <div className="projects-container text-white">
      <ProjectCard
        title="EduStream"
        description="A responsive student management dashboard UI built with Next.js and Tailwind CSS, featuring dark mode, mobile-friendly navigation, and modern admin layout."
        images={images}
        link="https://edustream-sigma.vercel.app/"
      />
    </div>
  );
}
