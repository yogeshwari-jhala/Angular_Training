class Item{

    itemId:number;
    itemName:string;
    itemPrice: number;  
    itemCategory: string;

    constructor(ItemId:number,ItemName:string, ItemPrice: number, ItemCategory: string)
    {
        this.itemId = ItemId;
        this.itemName = ItemName;
        this.itemPrice = ItemPrice;
        this.itemCategory= ItemCategory;
    }
    display=()=>{

        console.log("Item Id = " + this.itemId+"\nItem Name = "+this.itemName +"\nItem Price = " + this.itemPrice +"\nItem Category = "+ this.itemCategory);

    }
}
let items=new Item(1,"Temptation", 150, "Chocolates");

items.display();

