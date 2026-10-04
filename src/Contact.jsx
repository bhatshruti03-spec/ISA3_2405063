import { useState } from "react"

function Contact() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="page contact-page">
      <p className="section-label">GET IN TOUCH</p>

      <h1>Let’s Connect</h1>

      <p className="contact-text">
        Have a project idea, opportunity, or just want to connect?
        I’d love to hear from you.
      </p>

      <div className="contact-info">
        <div>
          <span>Email</span>
          <p>your-email@example.com</p>
        </div>

        <div>
          <span>Location</span>
          <p>Goa, India</p>
        </div>
      </div>

      <button
        className="message-button"
        onClick={() => setShowForm(true)}
      >
        Send Me a Message
      </button>

      {showForm && (
        <div className="message-overlay">
          <div className="message-card">
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Send Me a Message</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button className="send-button">
              Send Message
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Contact