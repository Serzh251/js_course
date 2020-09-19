
class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}

const prod10 = new Product_es6('Milk', 100);
const prod20 = new Product_es6('Potato', 50);
const prod30 = new Product_es6('Meat', 450);
const prod40 = new Product_es6('Eggs', 78);
prod40.make25PercentDiscount();