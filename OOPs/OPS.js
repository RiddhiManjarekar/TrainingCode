
// Online Payment System
class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}

class CreditCardPayment extends Payment {
    #cardNumber;
    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }
    makePayment() {
        return `Making credit card payment of $${this.amount}`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }
    makePayment() {
        return `Making PayPal payment of $${this.amount} from ${this.email}`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }
    makePayment() {
        return `Making Crypto payment of $${this.amount} to ${this.walletAddress}`;
    }
}

const payment1 = new CreditCardPayment(100, "2025-02-04", "g009876");
console.log("CrediCardPaymemt: "+payment1.makePayment());

const payment2 = new PayPalPayment(500, "2025-02-04", "riddhi@gmail.com");
console.log("Paypal payment: "+payment2.makePayment());


const payment3 = new CryptoPayment(1000, "2025-02-04", "abcxxxx");
console.log("CryptoPayment: "+payment3.makePayment());