function Projects() {
  const projects = [
    {
      title: "D-Link Admin Portal",
      description:
        "An internal administrative portal developed during my internship to manage employees, attendance, leaves, notifications and administrative activities.",
      tech: "React • Node.js • MySQL",
    },
    {
      title: "Birthday Website",
      description:
        "A creative birthday-themed website designed with an interactive and visually engaging user experience.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      title: "Bakery Website",
      description:
        "A responsive bakery website designed to showcase bakery products with a clean and user-friendly interface.",
      tech: "HTML • CSS • JavaScript",
    },
  ]

  return (
    <main className="page">
      <p className="section-label">MY WORK</p>

      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-number">0{index + 1}</span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <small>{project.tech}</small>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects