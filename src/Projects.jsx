function Projects() {
  return (
    <main className="page">
      <p className="section-label">MY WORK</p>

      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <span>01</span>
          <h2>D-Link Admin Portal</h2>
          <p>
            An internal administrative portal designed to manage
            employees, attendance, leaves and other administrative tasks.
          </p>
          <small>React • Node.js • MySQL</small>
        </div>

        <div className="project-card">
          <span>02</span>
          <h2>Personal Portfolio</h2>
          <p>
            A responsive portfolio website created to showcase my
            skills, projects, education and achievements.
          </p>
          <small>React • CSS • Node.js</small>
        </div>

        <div className="project-card">
          <span>03</span>
          <h2>Academic Project</h2>
          <p>
            A web-based project developed as part of my BCA academic
            learning and practical experience.
          </p>
          <small>Web Development</small>
        </div>
      </div>
    </main>
  )
}

export default Projects