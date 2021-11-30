import { CartItem } from './interfaces/cart_item';

export class Discount {
  private discount = 0.2; // 20%
  private month = 11;
  private price: number;
  private discountVsDay = {
    Monday: 0.5,
    Tuesday: 0.1,
    Wednesday: 0.2,
    Thursday: 0.6,
    Friday: 0.9,
    Saturday: 1,
    Sunday: 0.12
  };

  calculateDiscount(month: number): number {
    if (month == this.month) {
      return this.price * (1 - this.discount);
    }
    return this.price;
  }

  getDiscountByDayOfWeek(day: string): number {
    return this.discountVsDay[day];
  }

  hasDiscount(order: CartItem): boolean {
    return order.price > 1000;
  }

  getPrice(): number {
    return this.price;
  }

  setDiscount(discount: number): void {
    this.discount = discount;
  }

  checkIfDealIsSpecial() {
    let total: number;
    if (this.isSpecialDeal()) {
      total = this.price * 0.95;
    } else {
      total = this.price * 0.98;
    }

    this.send();
  }

  private send() {
    // do something
  }

  isSpecialDeal(): boolean {
    return this.price > 100;
  }
}
