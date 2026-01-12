const express = require("express");
const database = require("./database");
const db = require("./dbfunctions");

const router = express.Router();

// get clothing by category
router.get("/:category", async (req, res) => {
    try {
        const category = req.params.category;

        database.all('SELECT * FROM clothing WHERE category = ?', [category], (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'DB read failed' });
            }
            res.json(rows);
        });
        console.info("Fetched data from database successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occured during fetching." });
        return;
    }
});

module.exports = router;
