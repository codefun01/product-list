module.exports = app => {
    const customers = require("./controllers/product.controller.js");
  
    app.get("/products", customers.findAll);
  };