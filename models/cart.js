module.exports = function Cart(oldCart) {
    // console.log(oldCart);
    this.items = oldCart.items || {};

    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    if (this.items) {
        for (var key in this.items) {
            this.totalQty += this.items[key].qty;
            this.totalPrice += this.items[key].qty * this.items[key].price;
        }
    }

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {qty: 0, item: item, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;
    };

    this.generateArray = function () {
        var arr = [];
        // console.log(this);
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};