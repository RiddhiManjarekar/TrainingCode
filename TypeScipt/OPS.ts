// Online Payment System
class Payment {
    amount:number;
    date:string;

    constructor(amount:number, date:string) {
        this.amount = amount;
        this.date = date;
    }
    
}

class CreditCardPayment extends Payment {
    private cardNumber:string;
    constructor(amount:number, date:string, cardNumber:string) {
        super(amount, date);
        this.cardNumber = cardNumber;
    }
    makePayment():string {
        return `Making credit card payment of $${this.amount}`;
    }
}

class PayPalPayment extends Payment {
    private email:string;
    constructor(amount:number, date:string, email:string) {
        super(amount, date);
        this.email = email;
    }
    makePayment():string {
        return `Making PayPal payment of $${this.amount} from ${this.email}`;
    }
}

class CryptoPayment extends Payment {
    private walletAddress:string;
    constructor(amount:number, date:string, walletAddress:string) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }
    makePayment():string {
        return `Making Crypto payment of $${this.amount} to ${this.walletAddress}`;
    }
}

const payment1 = new CreditCardPayment(100, "2025-02-04", "g009876");
console.log("CrediCardPaymemt: "+payment1.makePayment());

const payment2 = new PayPalPayment(500, "2025-02-04", "riddhi@gmail.com");
console.log("Paypal payment: "+payment2.makePayment());


const payment3 = new CryptoPayment(1000, "2025-02-04", "abcxxxx");
console.log("CryptoPayment: "+payment3.makePayment());