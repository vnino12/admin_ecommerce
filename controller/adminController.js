const adminController ={
    dashboard: (req, res) => res.render('admin/index'),
    category_add: (req,res) => res.render('admin/category-add'),
    category_list: (req,res) => res.render('admin/category-list'),
    product_add: (req,res) => res.render('admin/product-add')
}






module.exports = adminController;