function About() {
  return (
    <main className="page">
      <p className="section-label">GET TO KNOW ME</p>

      <h1>About Me</h1>

      <div className="about-content">
        <div>
          <h2>Who I Am</h2>
          <p>
            I am Shruti Bhat, a BCA student with an interest in
            web development and creating simple, useful digital
            experiences.
          </p>
          <p>
            I enjoy learning new technologies, working on practical
            projects, and improving my development skills.
          </p>
        </div>

        <div className="skills-section">
          <h2>My Skills</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About