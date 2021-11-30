import { CartItem } from './interfaces/cart_item';
import { User } from './interfaces/user';
import { Wallet } from './interfaces/wallet';

export class ECommerceAgentRefactored {
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
    this.checkIfUserHasEnoughBalance(item.price);

    this.addItemToCart(item);

    this.deductUsersBalance(item.price);

    this.validateAndSendItemForDelivery(user, item);
    // const d = new Discount();
    // d.
  }

  private deductUsersBalance(price: number) {
    // deduct money from user's wallet
    this.wallet.balance = this.wallet.balance - price;
  }

  private revertDeduction(price: number) {
    // release user's balance
    this.wallet.balance = this.wallet.balance + price;
  }

  private checkIfUserHasEnoughBalance(price: number): void {
    // check if user has enough balance in wallet
    if (price > this.wallet.balance) {
      throw new Error('Not enough balance');
    }
  }

  private addItemToCart(item: CartItem) {
    // Add item to cart
    this.cartItems.push(item);
  }

  private validateAndSendItemForDelivery(user: User, item: CartItem) {
    // send item to user
    if (this.checkIfItemCanBeDeliveredToTheUser(user)) {
      this.sendForDelivery(item, user);
      // print receipt
      console.log(
        `New order: ${item.id} is out for deliver for User: ${user.name}`
      );
    } else {
      this.revertDeduction(item.price);
      // print error receipt
      console.log(`New order: ${item.id} for User: ${user.name} is failed `);
    }
  }

  // increase the price by the value in parameter
  increasePrice(price: number) {
    this.price += price;
  }

  withdrawFunds(amount: number): void {
    if (amount > this.wallet.balance) {
      throw new Error('Not enough balance');
    } else {
      this.wallet.balance -= amount;
    }
  }
}
