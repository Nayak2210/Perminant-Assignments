
import ProjectCard from "../components/ProjectCard.jsx";

function Home() {
  const projects = [
    { title: "Portfolio", description: "My personal portfolio site", isLive: true },
    { title: "Blog App", description: "A blog writing platform", isLive: false },
    { title: "E-Commerce", description: "Online shop", isLive: true },
    { title: "Dashboard", description: "Admin dashboard panel", isLive: false },
    { title: "Chat App", description: "Live chat app", isLive: true },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>
      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            isLive={project.isLive}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
