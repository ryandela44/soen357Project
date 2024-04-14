const express = require('express');
const {User} = require('../../database/src/database')
const bcrypt = require('bcryptjs'); // Ensure bcryptjs is installed for password hashing

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Check password (assume stored passwords are hashed)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
