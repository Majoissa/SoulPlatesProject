const express = require("express");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const nodemailer = require("nodemailer");

//for mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "soul.plates23@gmail.com",
    pass: "soulplates2023",
  },
});

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
  host: "",
  user: "",
  password: "150396+Majo",
  database: "soul_plates",
  max: 10, // número máximo de clientes en el pool
  idleTimeoutMillis: 30000, // tiempo máximo de inactividad antes de cerrar el cliente
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
  const {
    userFirstName,
    userLastName,
    Age,
    Gender,
    userEmail,
    PhoneNumber,
    Address,
    userMessage,
  } = req.body;

  // no empty fields
  if (
    !userFirstName ||
    !userLastName ||
    !Age ||
    !Gender ||
    !userEmail ||
    !PhoneNumber ||
    !Address ||
    !userMessage
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // email only once in database
  let client;
  try {
    client = await pool.connect();
    const emailResult = await client.query(
      "SELECT * FROM beneficiaries WHERE email = $1",
      [userEmail]
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
      "SELECT * FROM beneficiaries WHERE phone_number = $1",
      [PhoneNumber]
    );
    console.log(phoneResult);
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
      "INSERT INTO beneficiaries (first_name, last_name, age, gender, email, phone_number, address, message)" +
        " VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        userFirstName,
        userLastName,
        Age,
        Gender,
        userEmail,
        PhoneNumber,
        Address,
        userMessage,
      ]
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
  const {
    userFirstName,
    userLastName,
    userEmail,
    userMessage,
    PhoneNumber,
    Age,
  } = req.body;
  const query =
    "INSERT INTO volunteers (first_name, last_name, email, phone_number, message, age)" +
    " VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
    userFirstName,
    userLastName,
    userEmail,
    PhoneNumber,
    userMessage,
    Age,
  ];

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

//get information from volunteers table
app.get("/volunteers/info", (req, res) => {
  pool.query("SELECT * FROM volunteers", (error, result) => {
    if (error) {
      console.error("Error querying the database:", error);
      return res.status(500).json({ error: "Error querying the database" });
    }
    res.json(result.rows);
  });
});

//donors end-point for donors table
app.post("/donors", function (req, res) {
  const { full_name, email, message } = req.body;
  const query =
    "INSERT INTO donors (full_name, email,  message) VALUES ($1, $2, $3)";
  const values = [full_name, email, message];
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

//Edit information from beneficiares using PUT method
app.put("/beneficiaries/:id", async (req, res) => {
  const beneficiaries_id = req.params.id;
  const {
    newFirstName,
    newLastName,
    newAge,
    newGender,
    newEmail,
    newPhone_number,
    newAddress,
    newMessage,
    id,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE beneficiaries SET first_name = $1, last_name = $2, age = $3, gender = $4, email = $5, phone_number = $6,  address = $7, message = $8 WHERE id = $9 RETURNING *",
      [
        newFirstName,
        newLastName,
        newAge,
        newGender,
        newEmail,
        newPhone_number,
        newAddress,
        newMessage,
        beneficiaries_id,
      ]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar tu base de datos samuel");
  }
});

//for benefiaciries search in admin page
app.get("/beneficiaries/search", async (req, res) => {
  const lastName = req.query.lastName;

  try {
    const result = await pool.query(
      "SELECT * FROM beneficiaries WHERE last_name ILIKE $1",
      [`%${lastName}%`]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar beneficiarios" });
  }
});

// Endpoint para eliminar un beneficiario
app.delete("/beneficiaries/:id", async (req, res) => {
  const beneficiaries_id = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "DELETE FROM beneficiaries WHERE id = $1 RETURNING *",
      [beneficiaries_id]
    );
    client.release();

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Beneficiario no encontrado." });
    }

    res.status(200).json({ message: "Beneficiario eliminado con éxito." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar al beneficiario." });
  }
});

//contact page end point
app.post("/contact-page/contact", async (req, res) => {
  const {
    userFirstName,
    userLastName,
    Age,
    Gender,
    userEmail,
    PhoneNumber,
    Address,
    userMessage,
  } = req.body;

  // no empty fields
  if (
    !userFirstName ||
    !userLastName ||
    !Age ||
    !Gender ||
    !userEmail ||
    !PhoneNumber ||
    !Address ||
    !userMessage
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Configuración de mailOptions
  const mailOptions = {
    from: userEmail,
    replyTo: userEmail,
    to: "soul.plates@gmail.com",
    subject: `New message from ${userFirstName} ${userLastName}`,
    text: `
    Name: ${userFirstName} ${userLastName}
    Age: ${Age}
    Gender: ${Gender}
    Email: ${userEmail}
    Phone number: ${PhoneNumber}
    Address: ${Address}
    Message: ${userMessage}
  `,
  };

  // email only once in database
  let client;
  try {
    client = await pool.connect();
    const emailResult = await client.query(
      "SELECT * FROM contact WHERE email = $1",
      [userEmail]
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
      "SELECT * FROM contact WHERE phone_number = $1",
      [PhoneNumber]
    );
    console.log(phoneResult);
    if (phoneResult.rows.length > 0) {
      return res.status(400).json({ error: "Phone number already exists." });
    }
  } catch (err) {
    console.error(err);
    if (client) client.release();
    return res.status(500).json({ error: "Error checking phone number." });
  }

  // Intento de enviar el email de forma asíncrona
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending the email:", error);
    return res.status(500).json({ error: "Error sending email." });
  }

  // insertion in database
  try {
    await client.query(
      "INSERT INTO contact (first_name, last_name, age, gender, email, phone_number, address, message)" +
        " VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        userFirstName,
        userLastName,
        Age,
        Gender,
        userEmail,
        PhoneNumber,
        Address,
        userMessage,
      ]
    );
    client.release();
    res.json({ success: true, message: "Data inserted successfully." });
  } catch (err) {
    console.error(err);
    if (client) client.release();
    res.status(500).json({ error: "Error inserting data." });
  }
});

const PORT = 5550;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
