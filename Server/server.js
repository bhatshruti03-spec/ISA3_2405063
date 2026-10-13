import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mysql from "mysql2/promise"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const DB_NAME = process.env.DB_NAME || "portfolio_db"

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || ""
}

let pool

async function initDatabase() {
  const connection = await mysql.createConnection(dbConfig)
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``)
  await connection.end()

  pool = mysql.createPool({
    ...dbConfig,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
  })

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log(`MySQL connected. Database: ${DB_NAME}, table: contact_messages`)
}

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running")
})

app.post("/api/contact", async (req, res) => {
  const name = (req.body?.name || "").trim()
  const email = (req.body?.email || "").trim()
  const message = (req.body?.message || "").trim()

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required"
    })
  }

  if (name.length > 100 || email.length > 150) {
    return res.status(400).json({
      success: false,
      message: "Name or email is too long"
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email"
    })
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    )

    console.log("New contact message saved. ID:", result.insertId)

    res.json({
      success: true,
      message: "Message received and saved successfully"
    })
  } catch (error) {
    console.error("Database error:", error.message)

    res.status(500).json({
      success: false,
      message: "Could not save the message"
    })
  }
})

const PORT = process.env.PORT || 5000

initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message)
    process.exit(1)
  })