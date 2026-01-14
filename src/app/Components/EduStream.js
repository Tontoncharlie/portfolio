import ProjectCard from "./ProjectCard";

const images = [
  "/project-images/edustream/edustream-1.png",
  "/project-images/edustream/edustream-2.png",
  "/project-images/edustream/edustream-3.png",
  "/project-images/edustream/edustream-4.png",
  "/project-images/edustream/edustream-5.png",
  "/project-images/edustream/edustream-6.png",
];

export default function EduStream() {
  return (
    <div className="projects-container text-white">
      <ProjectCard
        title="EduStream-Management dashboard"
        description="A responsive student management dashboard UI built with Next.js and Tailwind CSS, featuring dark mode, mobile-friendly navigation, and modern admin layout."
        images={images}
        link="https://edustream-sigma.vercel.app/"
      />
    </div>
  );
}
