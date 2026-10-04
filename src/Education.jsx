function Education() {
  return (
    <main className="page">
      <p className="section-label">MY JOURNEY</p>

      <h1>Education & Certificates</h1>

      <div className="education-grid">
        <div className="info-card">
          <span>EDUCATION</span>
          <h2>Bachelor of Computer Applications</h2>
          <p>2023 – 2026</p>
          <p>
            Building a strong foundation in computer applications,
            programming and web development.
          </p>
        </div>

        <div className="info-card">
          <span>CERTIFICATES</span>
          <h2>Professional Learning</h2>
          <p>
            Certifications and additional learning completed during
            my academic journey.
          </p>

          <ul>
            <li>Full Stack Development</li>
            <li>Web Development</li>
            <li>UI/UX & Figma</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Education