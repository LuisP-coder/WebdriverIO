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
}

const Sauce = new SauceDemo();
export { Sauce };