const db = require('./database');

const clothingDb = {
    // Fetch all clothing items by category
    findByCategory: (category) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM clothing WHERE category = ?';
            db.all(query, [category], (err, rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    },

    // Fetch all clothes
    findAll: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM clothing', [], (err, rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    },
};

module.exports = clothingDb;
