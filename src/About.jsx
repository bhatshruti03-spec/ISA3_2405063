function About() {
  return (
    <main className="page">
      <p className="section-label">GET TO KNOW ME</p>

      <h1>About Me</h1>

      <div className="about-content">
        <div>
          <h2>Who I Am</h2>

          <p>
            I am Shruti Bhat, a Bachelor of Computer Applications student
            interested in web development and creating practical digital
            solutions.
          </p>

          <p>
            I enjoy learning new technologies, building projects, and
            improving my skills through practical experience.
          </p>
        </div>

        <div className="skills-section">
          <h2>My Skills</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About