
// =============================
// VALIDATION MIDDLEWARE
// =============================

function validateInput(req, res, next) {

    const { name, email, password } = req.body;


    // =============================
    // STEP 1: REQUIRED FIELDS CHECK
    // =============================
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields (name, email, password) are required"
        });
    }


    // =============================
    // STEP 2: NAME VALIDATION
    // (letters + spaces only)
    // =============================
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
        return res.status(400).json({
            success: false,
            message: "Name must contain only letters and spaces"
        });
    }


    // =============================
    // STEP 3: EMAIL VALIDATION
    // =============================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
    }


    // =============================
    // STEP 4: PASSWORD VALIDATION
    // =============================
    // At least 8 characters + 1 special character

    const passwordRegex = /^(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters and include a special character"
        });
    }


    // =============================
    // IF ALL VALIDATION PASSES
    // =============================

    next();
}

module.exports = validateInput;