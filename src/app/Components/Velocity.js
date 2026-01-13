import ProjectCard from "./ProjectCard";

const images = [
    "/project-images/velocity/velocity-1.png",
    "/project-images/velocity/velocity-2.png",
    "/project-images/velocity/velocity-3.png",
    "/project-images/velocity/velocity-4.png",
    "/project-images/velocity/velocity-5.png",
    "/project-images/velocity/velocity-6.png",
    "/project-images/velocity/velocity-7.png",
    "/project-images/velocity/velocity-8.png",
];

export default function Velocity() {
    return (
        <div className="projects-container text-white">
            <ProjectCard
                title="Velocity SaaS Subscription"
                description="Velocity SaaS is a full-stack subscription platform for user signups, tiered plans (Free, Pro, Enterprise), and secure payments. Built with Next.js 14, Supabase, PostgreSQL, and Paystack, it features a responsive glassmorphism UI with dark mode and smooth animations."
                images={images}
                link="https://velocity-saa-s-subscription-7nhss1j1v-tontoncharlies-projects.vercel.app/"
            />
        </div>
    );
}
