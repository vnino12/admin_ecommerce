const product = require('../model/productModel');

const Products ={
    createProducts: (req, res) => {
        const { product_name, description, price, stock, category_id } = req.body;
        const thumbnailImage = req.file.path.replace(/\\/g, '/');

        // Validate that category_id is provided
        if (!category_id) {
            return res.status(400).send("Please select a valid category.");
        }

        // Proceed with product creation
        product.create({
            product_name,
            description,
            price,
            stock,
            image: thumbnailImage,
            category_id
        }, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error adding product');
            }
            res.redirect('/product-add');
        });
    },
    getAddProductPage: (req, res) => {
       product.getAllCategories((err, results) => {
            if (err) {
                return res.status(500).send('Error fetching categories');
            }
            res.render('admin/product-add', { categories: results }); // Pass categories to the view
        });
    },
    
    
    }

    module.exports = Products;

