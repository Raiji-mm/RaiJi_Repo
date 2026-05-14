
// =============================
// EXPRESS SERVER SETUP
// =============================

const express = require("express");
const app = express();

// middleware to parse JSON
app.use(express.json());

const validateInput = require("./validationMiddleware");


// =============================
// DEMO ROUTE (/register)
// =============================

app.post("/register", validateInput, (req, res) => {

    // If validation passes, this runs

    res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: req.body
    });
});


// =============================
// START SERVER
// =============================

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});