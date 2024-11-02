const express = require('express');
const router = express.Router();
const adminController = require("../controller/adminController");
const categoryController = require("../controller/categoryController"); // Renamed for clarity
const productController = require('../controller/productController')
const upload = require('../config/multerSetup'); // Ensure this file is configured for image uploads

// Display routes
router.get('/', adminController.dashboard);
router.get('/category-add', adminController.category_add);
router.get('/product-add', productController.getAddProductPage); // Use the method from productController

router.get('/category-list', categoryController.getAllCategories); // Ensure only one handler for /category-list
router.post('/category-list/delete/:id', categoryController.deleteCategories);
// Categories routes
router.post('/add-category', upload.single('thumbnail_image'), categoryController.createCategory);
router.post('/add-product', upload.single('image'), productController.createProducts);

module.exports = router;
