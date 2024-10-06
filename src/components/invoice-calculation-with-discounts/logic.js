export class Invoice {
    constructor(name, price, discount) {
        this.name = name;
        this.price = Number(price);
        this.discount = Number(discount)
        this.finalPrice = price - (discount / 100 * price);
    }
}
export class InvoiceCalculationLogic {
    invoices = []
    total = 0
    addInvoice(value, price, discount) {
        this.invoices.push(new Invoice(value, price, discount))
        this.total+=this.invoices[this.invoices.length-1].finalPrice
    }
}
