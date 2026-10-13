import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus("")

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
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
      } else {
        setStatus(data.message || "Unable to send message.")
      }
    } catch {
      setStatus("Unable to send message.")
    } finally {
      setSending(false)
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
          <p>bhatshruti@gmail.com</p>
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

              <button type="submit" className="send-button" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
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