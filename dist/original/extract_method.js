class ECommerceAgent {
    sendForDelivery(item, user) { }
    checkIfItemCanBeSentToTheUser(user) {
        return null;
    }
    // addItemToCart(item: CartItem): void {
    //   this.cartItems.push(item);
    // }
    placeOrder(user, item) {
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
        if (this.checkIfItemCanBeSentToTheUser(user)) {
            this.sendForDelivery(item, user);
            // print receipt
            console.log(`New order: ${item.id} is out for deliver for User: ${user.name}`);
        }
        else {
            // release user's balance
            this.wallet.balance = this.wallet.balance + cost;
            console.log(`New order: ${item.id} for User: ${user.name} is failed `);
        }
    }
}
