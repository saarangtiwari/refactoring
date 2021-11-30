export class Invoice {
  userId: number;
  itemName: string;
  userName: string;
  price: number;

  setInvoice(
    price: number,
    userId: number,
    itemName: string,
    userName: string
  ) {
    this.price = price;
    this.userId = userId;
    this.itemName = itemName;
    this.userName = userName;
  }

  getInvoice() {
    return {
      price: this.price,
      userId: this.userId,
      itemName: this.itemName,
      userName: this.userName
    };
  }

  getInvoiceFormat() {
    return 'format type';
  }

  printInvoice() {
    this.getInvoiceFormat();
    // do something
  }
}
