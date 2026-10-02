import ProjectCard from "./ProjectCard";

const images = [
  "/project-images/fediboard/fediboard-1.png",
  "/project-images/fediboard/fediboard-2.png",
  "/project-images/fediboard/fediboard-3.png",
  "/project-images/fediboard/fediboard-4.png",
  "/project-images/fediboard/fediboard-5.png",
];

export default function Fediboards() {
  return (
    <div className="projects-container text-white">
      <ProjectCard
        title="FediBoards Landing Page"
        description="A modern, high-converting product showcase landing page for FediBoards (Luriferd Nigeria Ltd). Built with Next.js App Router and Tailwind CSS, featuring modular UI primitives (shadcn/ui), responsive product catalogs, and build-time static delivery for fast page loads."
        images={images}
        link="https://www.fediboards.com/"
        github="https://github.com/Tontoncharlie/fediboards"
        tags={["Next.js", "React", "Tailwind CSS", "shadcn/ui", "TypeScript"]}
      />
    </div>
  );
}
