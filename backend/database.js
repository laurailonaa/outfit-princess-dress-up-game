const sqlite3 = require('sqlite3').verbose();

// make a SQLite database in memory
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    // Create table for clothing
    db.run('CREATE TABLE IF NOT EXISTS clothing (id INTEGER PRIMARY KEY,filename TEXT, category TEXT, created_at DATE)');

    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['hair.png', 'hair']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['brownhair.png', 'hair']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['brownhairshort.png', 'hair']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['curls.png', 'hair']);

    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['shirt.png', 'shirt']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['tshirt.png', 'shirt']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['top.png', 'shirt']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['sweater.png', 'shirt']);

    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['jeans.png', 'pants']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['skirt.png', 'pants']);
    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['shorts.png', 'pants']);

    db.run('INSERT INTO clothing (filename, category, created_at) VALUES (?, ?, datetime("now"))', ['sneakers.png', 'shoes']);
})

module.exports = db;