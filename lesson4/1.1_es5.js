"use strict";
function Product(name, price) {
    this.name = name;
    this.price = price;
}

let Discount = {
    make25PercentDiscount: function () {
        this.price = this.price - (this.price * 0.25);
    }
};
Product.prototype = Discount;

const prod1 = new Product('Milk', 100);
const prod2 = new Product('Potato', 50);
const prod3 = new Product('Meat', 450);
const prod4 = new Product('Eggs', 78);
prod4.make25PercentDiscount();