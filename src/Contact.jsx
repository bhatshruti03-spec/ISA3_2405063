import { useState } from "react"

function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Message sent successfully!")
        setName("")
        setEmail("")
        setMessage("")
      }
    } catch (error) {
      setStatus("Unable to send message.")
    }
  }

  return (
    <div className="page contact-page">
      <p className="section-label">GET IN TOUCH</p>

      <h1>Contact Me</h1>

      <p className="contact-text">
        Have a question or want to work together? Feel free to send me a message.
      </p>

      <div className="contact-info">
        <div>
          <span>EMAIL</span>
          <p>shruti@example.com</p>
        </div>

        <div>
          <span>LOCATION</span>
          <p>Goa, India</p>
        </div>
      </div>

      <button
        className="message-button"
        onClick={() => {
          setShowForm(true)
          setStatus("")
        }}
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

            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>

            {status && <p style={{ marginTop: "15px" }}>{status}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact