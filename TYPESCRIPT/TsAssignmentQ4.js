var Item = /** @class */ (function () {
    function Item(ItemId, ItemName, ItemPrice, ItemCategory) {
        var _this = this;
        this.display = function () {
            console.log("Item Id = " + _this.itemId + "\nItem Name = " + _this.itemName + "\nItem Price = " + _this.itemPrice + "\nItem Category = " + _this.itemCategory);
        };
        this.itemId = ItemId;
        this.itemName = ItemName;
        this.itemPrice = ItemPrice;
        this.itemCategory = ItemCategory;
    }
    return Item;
}());
var items = new Item(1, "Temptation", 150, "Chocolates");
items.display();
