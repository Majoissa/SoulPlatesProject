const express = require("express");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", //React is running in port 3000
    credentials: true,
  })
);

// Configuración de pg-pool
const pool = new Pool({

    host: "localhost",
    user: "postgres",
    password: "occlaptop1",
    database: "soul_plates",
    max: 10, // número máximo de clientes en el pool
    idleTimeoutMillis: 30000, // tiempo máximo de inactividad antes de cerrar el cliente
    port: 5433,
});

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO admins (username, email, password) VALUES ($1, $2, $3) RETURNING id",
      [username, email, hashedPassword]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({
        error: "El nombre de usuario o correo electrónico ya está en uso.",
      });
    }
    res.status(500).json({ error: "Error al registrar el usuario." });
  }
});

//Login
app.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM admins WHERE username = $1",
      [username]
    );
    client.release();

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = result.rows[0];
    const hashedPassword = user.password;

    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Password comparison error" });
      }

      if (result) {
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        res.cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Error during login" });
  }
});

/// LOGOUT

app.post("/admin/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "You have successfuly logged out" });
});

//beneficiaries insertion
app.post("/contact/beneficiaries", async (req, res) => {
  const { full_name, email, address, phone, message } = req.body;

  // no empty fields
  if (!full_name || !email || !address || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // email only once in database
  let client;
  try {
    client = await pool.connect();
    const emailResult = await client.query(
      "SELECT * FROM beneficiaries WHERE email = $1",
      [email]
    );
    if (emailResult.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists." });
    }
  } catch (err) {
    console.error(err);
    if (client) client.release();
    return res.status(500).json({ error: "Error checking email." });
  }

  //phone only once in database
  try {
    const phoneResult = await client.query(
      "SELECT * FROM beneficiaries WHERE phone = $1",
      [phone]
    );
    if (phoneResult.rows.length > 0) {
      return res.status(400).json({ error: "Phone number already exists." });
    }
  } catch (err) {
    console.error(err);
    if (client) client.release();
    return res.status(500).json({ error: "Error checking phone number." });
  }

  // insertion in database
  try {
    await client.query(
      "INSERT INTO beneficiaries (full_name, email, address, phone, message) VALUES ($1, $2, $3, $4, $5)",
      [full_name, email, address, phone, message]
    );
    client.release();
    res.json({ success: true, message: "Data inserted successfully." });
  } catch (err) {
    console.error(err);
    if (client) client.release();
    res.status(500).json({ error: "Error inserting data." });
  }
});

//get information from beneficiaries table
app.get("/beneficiaries", (req, res) => {
  pool.query("SELECT * FROM beneficiaries", (error, result) => {
    if (error) {
      console.error("Error querying the database:", error);
      return res.status(500).json({ error: "Error querying the database" });
    }
    res.json(result.rows);
  });
});

app.post("/volunteers", function (req, res) {
  console.log("received request");
  const { first_name, last_name, email, phone_number, message } = req.body;
  console.log(req.body);
  const query =
    "INSERT INTO volunteers (first_name, last_name, email, phone_number, message) VALUES ($1, $2, $3, $4, $5)";
  const values = [first_name, last_name, email, phone_number, message];
  console.log({ values });
  console.log(query);
  pool
    .query({
      text: query,
      values: values,
    })
    .then(() => {
      res.status(200).json({ success: true }); // Respond with JSON indicating success
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: "Error querying the database" });
    });
});

// Endpoint for obtain all the 'volunteering' information

app.get("/volunteering", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM volunteering");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for obtain all the 'testimonials' information

app.get("/testimonials", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM testimonials");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for obtain all the 'about us personell database' information

app.get("/aboutus", function (req, res) {
  pool.query("SELECT * FROM personnel", (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result.rows);
    }
  });
});

const PORT = 5550;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
