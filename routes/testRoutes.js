const express = require("express");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/protected", protect, (req, res) => {
    res.json({
        message: "You have access to the protected route",
        user: req.user
    });
});
router.get(
    "/admin",
    protect,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin",
            user: req.user
        });
    }
);

module.exports = router;