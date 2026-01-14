import ProjectCard from "./ProjectCard";

const images = [
    "/project-images/inventa/inventa-1.png",
    "/project-images/inventa/inventa-2.png",
    "/project-images/inventa/inventa-3.png",
    "/project-images/inventa/inventa-4.png",
    "/project-images/inventa/inventa-5.png",
    "/project-images/inventa/inventa-6.png",
    "/project-images/inventa/inventa-7.png",
    "/project-images/inventa/inventa-8.png",
    "/project-images/inventa/inventa-9.png",
    "/project-images/inventa/inventa-10.png",
    "/project-images/inventa/inventa-11.png",
    "/project-images/inventa/inventa-12.png",
    "/project-images/inventa/inventa-13.png",
];

export default function Inventa() {
    return (
        <div className="projects-container text-white">
            <ProjectCard
                title="Inventa-Inventory app"
                description="Inventa is a web-based inventory management application designed to help businesses track products, manage stock levels, and monitor inventory activities efficiently."
                images={images}
                link="https://inventa-lrc3.vercel.app/"
            />
        </div>
    );
}
