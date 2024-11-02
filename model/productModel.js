const db = require('../config/db');

const products = {
    create: (data, callback) => {
        const query = "INSERT INTO products (product_name, image, description, category_id, price, stock) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(query, [data.product_name, data.image, data.description, data.category_id, data.price, data.stock], (err, results) => {
            if (err) {
                console.error('Database Error:', err); // Log the database error
            }
            callback(err, results); // Always call the callback
        });
    },
    getAllCategories: (callback) => {
        db.query('SELECT category_id, category_name FROM categories', (err, results) => {
            callback(err, results); // Pass results to the callback
        });
    }
}

module.exports = products;
