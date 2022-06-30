const storage = require("../data/storage");

class store {
  //get all products
  static getAll() {
    return storage.storage.get("products").value();
  }

  //get by id
  static getById(id) {
     id = parseInt(id)
    return storage.storage.get("products").find({ id: id }).value();
  }

  //handle transactions
  /*
    Map through all of the products in the shopping cart. 
    Make qty for each item
    */
}

module.exports = store;
