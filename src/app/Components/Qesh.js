import ProjectCard from "./ProjectCard";

const images = [
  "/project-images/qesh/qesh-1.png",
  "/project-images/qesh/qesh-2.png",
  "/project-images/qesh/qesh-3.png",
  "/project-images/qesh/qesh-4.png",
  "/project-images/qesh/qesh-5.png",
];

export default function Qesh() {
  return (
    <div className="projects-container text-white">
      <ProjectCard
        title="QESH Academy CRM & WordPress API Bridge"
        description="A full-stack integration bridging Django CRM with WordPress. Features automated candidate onboarding, student/instructor workflows, an automated exam engine with anti-cheat safeguards, instant PDF certificate generation with QR verification (ReportLab), and Gemini AI integration."
        images={images}
        link="https://academy.qeshstandards.com/"
        github="https://github.com/Tontoncharlie/qesh-crm-wordpress-bridge"
        tags={["Django", "Python", "WordPress API", "ReportLab", "Gemini AI", "PostgreSQL"]}
      />
    </div>
  );
}
