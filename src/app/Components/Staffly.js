import ProjectCard from "./ProjectCard";

const images = [
    "/project-images/staffly/staffly-1.png",
    "/project-images/staffly/staffly-2.png",
    "/project-images/staffly/staffly-3.png",
    "/project-images/staffly/staffly-4.png",
    "/project-images/staffly/staffly-5.png",
    "/project-images/staffly/staffly-6.png",
    "/project-images/staffly/staffly-7.png",
    "/project-images/staffly/staffly-8.png",
    "/project-images/staffly/staffly-9.png",
    "/project-images/staffly/staffly-10.png",
    "/project-images/staffly/staffly-11.png",
];

export default function Staffly() {
    return (
        <div className="projects-container text-white">
            <ProjectCard
                title="Staffly-User-Management-System"
                description="Staffly - A full-stack user management system built with Django, featuring role-based access control, premium UI with Tailwind CSS, and secure authentication. Deployed on Render with PostgreSQL."
                images={images}
                link="https://staffly-user-management-system-1.onrender.com/accounts/login/"
            />
        </div>
    );
}
