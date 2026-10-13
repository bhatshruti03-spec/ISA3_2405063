function Education() {
  const certificates = [
    "Figma Certificate",
    "Python Certificate",
    "Java Certificate",
    "MySQL Certificate",
    "Course Completion Certificate",
    "AI/ML Workshop Certificate",
    "D-Link Internship Certificate",
  ]

  return (
    <main className="page">
      <p className="section-label">MY JOURNEY</p>

      <h1>Education & Certificates</h1>

      <div className="education-grid">
        <div className="info-card">
          <span>EDUCATION</span>

          <h2>Bachelor of Computer Applications</h2>

          <p>
            GVM's Gopal Govind Poy Raiturkar College of Commerce &
            Economics
          </p>

          <p>BCA Student</p>
        </div>

        <div className="info-card">
          <span>CERTIFICATES</span>

          <ul>
            {certificates.map((certificate, index) => (
              <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Education