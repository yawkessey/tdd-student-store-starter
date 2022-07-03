const storage = require("../data/storage");
const addedDate = new Date();
const addedTime = addedDate.toString();

// storage.
class store {
  //get all products
  static getAll() {
    return storage.storage.get("products").value();
  }

  //get by id
  static getById(id) {
    id = parseInt(id);
    return storage.storage.get("products").find({ id: id }).value();
  }

  static calcTotal(shoppingCart) {
    let subtotal = 0;
    //Map our shoppingcart
    //In the shopping cart we have product id and quantity
    shoppingCart.map((element) => {
      let product = this.getById(element.id);
      subtotal += product.price * element.quantity;
      console.log("product price:", product.price);
      console.log("product quantity:", element.quantity);
      console.log(subtotal);
    });
    let tax = subtotal * 0.0875;
    let total = subtotal + tax;
    return total;
  }
  static createOrderId() {
    let id = storage.storage.get("purchases").value().length;
    return id;
  }
  // Handle transactions
  static createOrder(userInfo, shoppingCart) {
    let orderInfo = {
      orderId: this.createOrderId(),
      name: userInfo.name,
      email: userInfo.email,
      order: shoppingCart,
      total: this.calcTotal(shoppingCart).toFixed(2),
      createdAt: addedTime,
    };

    let purchase = storage.storage.get("purchases").value();

    purchase.push(orderInfo);

    let purchases = storage.storage.set("purchases", purchase).write();

    return purchase;
  }
}

module.exports = store;
