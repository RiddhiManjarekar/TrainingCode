var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Online Payment System
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    CreditCardPayment.prototype.makePayment = function () {
        return "Making credit card payment of $".concat(this.amount);
    };
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment(amount, date, email) {
        var _this = _super.call(this, amount, date) || this;
        _this.email = email;
        return _this;
    }
    PayPalPayment.prototype.makePayment = function () {
        return "Making PayPal payment of $".concat(this.amount, " from ").concat(this.email);
    };
    return PayPalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    CryptoPayment.prototype.makePayment = function () {
        return "Making Crypto payment of $".concat(this.amount, " to ").concat(this.walletAddress);
    };
    return CryptoPayment;
}(Payment));
var payment1 = new CreditCardPayment(100, "2025-02-04", "g009876");
console.log("CrediCardPaymemt: " + payment1.makePayment());
var payment2 = new PayPalPayment(500, "2025-02-04", "riddhi@gmail.com");
console.log("Paypal payment: " + payment2.makePayment());
var payment3 = new CryptoPayment(1000, "2025-02-04", "abcxxxx");
console.log("CryptoPayment: " + payment3.makePayment());
