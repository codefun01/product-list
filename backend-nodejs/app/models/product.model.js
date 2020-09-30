const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.name = product.name;
  this.price = customer.price;
  this.imageUrl = customer.imageUrl;
};



Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};


module.exports = Product;