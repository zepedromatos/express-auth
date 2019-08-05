const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.json({ msg: "Express Auth..." }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
