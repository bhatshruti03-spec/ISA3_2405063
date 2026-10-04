import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running")
})

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body

  console.log("New Contact Message:")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Message:", message)

  res.json({
    success: true,
    message: "Message received successfully"
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})