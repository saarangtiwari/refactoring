interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface Wallet {
  balance: number;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

class ECommerceAgent {
  cartItems: CartItem[];
  wallet: Wallet;

  price: number;
  discount = 0.2; // 20%
  month = 11;

  sendForDelivery(item: CartItem, user: User) {}
  checkIfItemCanBeDeliveredToTheUser(user: User): boolean {
    return null;
  }

  // addItemToCart(item: CartItem): void {
  //   this.cartItems.push(item);
  // }

  placeOrder(user: User, item: CartItem) {
    // check if user has enough balance in wallet

    if (item.price > this.wallet.balance) {
      throw new Error('Not enough balance');
    }

    // Add item to cart
    this.cartItems.push(item);

    // deduct money from user's wallet
    const cost = item.price;
    this.wallet.balance = this.wallet.balance - cost;

    // send item to user
    if (this.checkIfItemCanBeDeliveredToTheUser(user)) {
      this.sendForDelivery(item, user);
      // print receipt
      console.log(
        `New order: ${item.id} is out for deliver for User: ${user.name}`
      );
    } else {
      // release user's balance
      this.wallet.balance = this.wallet.balance + cost;
      // print error receipt
      console.log(`New order: ${item.id} for User: ${user.name} is failed `);
    }
  }

  calculateDiscount(month: number): number {
    if (month == this.month) {
      return this.price * (1 - this.discount);
    }
    return this.price;
  }

  getDiscountByDayOfWeek(day: string): number {
    if (day == 'Monday') {
      return 0.5;
    } else if (day == 'Tuesday') {
      return 0.1;
    } else if (day == 'Wednesday') {
      return 0.2;
    } else if (day == 'Thursday') {
      return 0.6;
    } else if (day == 'Friday') {
      return 0.9;
    } else if (day == 'Saturday') {
      return 1;
    } else if (day == 'Sunday') {
      return 0.12;
    }
  }

  hasDiscount(order: CartItem): boolean {
    let basePrice: number = order.price;
    return basePrice > 1000;
  }

  checkIfDealIsSpecial() {
    let total: number;
    if (this.isSpecialDeal()) {
      total = this.price * 0.95;
      this.send();
    } else {
      total = this.price * 0.98;
      this.send();
    }
  }

  send() {
    // do something
  }

  isSpecialDeal(): boolean {
    if (this.price > 100) {
      return true;
    } else return false;
  }

  getPriceAndSetDiscount(discount: number) {
    this.discount = discount;
    return this.price;
  }

  // parameterize
  increasePriceBy10() {
    this.price += 10;
  }
  increasePriceBy20() {
    this.price += 20;
  }

  // throw exception
  withdrawFunds(amount: number): number {
    if (amount > this.wallet.balance) {
      return -1;
    } else {
      this.wallet.balance -= amount;
      return 0;
    }
  }

  // separate out in Invoice Class
  userId: number;
  itemName: string;
  userName: string;
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
