import ProjectCard from "./ProjectCard";

const images = [
    "/project-images/79digital/hero.png",
    "/project-images/79digital/dashboard.png",
    "/project-images/79digital/payouts.png",
    "/project-images/79digital/leaderboard.png",
    "/project-images/79digital/university.png",
];

export default function SeventyNineDigital() {
    return (
        <div className="projects-container text-white">
            <ProjectCard
                title="79 Digital Marketplace Platform"
                description="A full-stack digital product marketplace and growth ecosystem built with Next.js 16 and Django REST. Features automated affiliate attribution, atomic wallet transactions, and Flutterwave payments."
                images={images}
                github="https://github.com/Tontoncharlie/79-digital-Company"
                link="https://www.79digitalcompany.com/"
                tags={["Next.js", "Django REST", "Python", "Tailwind CSS", "PostgreSQL", "Flutterwave"]}
            />
        </div>
    );
}
