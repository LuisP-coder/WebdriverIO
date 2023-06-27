class SauceDemo {
    get submit() {
        return $('.submit-button');
    }

    get userInput() {
        return $('#user-name');
    }

    get passInput() {
        return $('#password');
    }

    get error() {
        return $('.error-message-container');
    }
    
    get errorClear(){
        return $('.error-button');
    }

    addToCart(num) {
        return $(`.btn_inventory:nth-of-type(${num})`);
    }

    removeCart(num){
        return $(`.cart_button:nth-of-type(${num})`);
    }

    get cart() {
        return $('.shopping_cart_link');
    }

    get checkout() {
        return $('.checkout_button');
    }

    get firstName() {
        return $('#first-name');
    }

    get lastName() {
        return $('#last-name');
    }

    get postalCode() {
        return $('#postal-code');
    }

    get cont() {
        return $('.cart-button');
    }

    itemName(num) {
        return $(`.inventory_item_name:nth-of-type(${num})`);
    }

    cardShip(num) {
        return $(`.summary_value_label:nth-of-type(${num})`);
    }

    get subTotal() {
        return $('.summary_subtotal_label');
    }

    get taxes() {
        return $('.summary_tax_label');
    }

    get total() {
        return $('.summary_total_label');
    }

    get checkmark() {
        return $('.pony_express');
    }

    get completeHead() {
        return $('.complete-header');
    }

    get completeText() {
        return $('.complete-text');
    }

    get backHome() {
        return $('#back-to-products');
    }
}

const Sauce = new SauceDemo();
export { Sauce };