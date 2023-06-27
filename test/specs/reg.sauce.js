import { Sauce } from '../pageobjects/sauce.page.js';

describe('Automate SauceLab Page', async() => {
    const pageUrl = 'https://www.saucedemo.com/';

    it('Verify login', async() => {
        browser.url(pageUrl);

        // User enters without username and password
        await expect(Sauce.submit).click();
        await expect(Sauce.error).isDisplayed();
        await expect(Sauce.error).toHaveText(
            'Epic sadface: Username and password do not match any user in this service'
        );
        await expect(Sauce.errorClear).click();

        // User attempts to login without password
        await expect(Sauce.userInput).click();
        await expect(Sauce.userInput).setValue('yes');
        await expect(Sauce.submit).click();
        await expect(Sauce.error).isDisplayed();
        await expect(Sauce.error).toHaveText(
            'Epic sadface: Password is required'
        );
        await expect(Sauce.errorClear).click();

        // User to login without username
        await expect(Sauce.passInput).click();
        await expect(Sauce.passInput).setValue('yes');
        await expect(Sauce.submit).click();
        await expect(Sauce.error).isDisplayed();
        await expect(Sauce.error).toHaveText(
            'Epic sadface: Username is required'
        );
        await expect(Sauce.errorClear).click();

        // User logs in with correct username and password
        await expect(Sauce.userInput).click();
        await expect(Sauce.userInput).setValue('standard_user');
        await expect(Sauce.passInput).click();
        await expect(Sauce.passInput).setValue('secret_sauce');
    });

    it('Add/remove item(s) to cart', async() => {
        // There is an alert when entering the page
        browser.dismissAlert();
        browser.pause(3000);

        await expect(Sauce.addToCart(1)).click();
        await expect(Sauce.addToCart(2)).click()
        await expect(Sauce.addToCart(3)).click();
        await expect(Sauce.cart).click();

        // Remove one item from cart
        await expect(Sauce.removeCart(1)).click();

        // Goes to add info page
        await expect(Sauce.checkout).click();
    });

    it('Add info and checkout items in cart', async() => {
        // Adds user's info
        await expect(Sauce.firstName).click();
        await expect(Sauce.firstName).setValue('Bob');
        await expect(Sauce.lastName).click();
        await expect(Sauce.lastName).setValue('Builder');
        await expect(Sauce.postalCode).click();
        await expect(Sauce.postalCode).setValue('12345');
        await expect(Sauce.cont).click();
    });

    it('Verify items and payment info are correct', async() => {
        // Info for items
        await expect(Sauce.itemName(1)).toHaveText('Sauce Labs Bike Light');
        await expect(Sauce.itemName(2)).toHaveText('Sauce Labs Backpack');

        // Verifies payment info
        await expect(Sauce.cardShip(1)).toHaveText('SauceCard #31337');
        await expect(Sauce.cardShip(2)).toHaveText('Free Pony Express Delivery!');

        // Checks total for items
        await expect(Sauce.subTotal).toHaveText('Item Total: $39.98');
        await expect(Sauce.taxes).toHaveText('Tax: $3.20');

        await expect(Sauce.total).toHaveText('Total: $43.18');
    });

    it('Verify order is complete', async() => {
        // Verifies user is on the correct page after completing checkout
        await expect(Sauce.checkmark).isDisplayed();
        await expect(Sauce.completeHead).toHaveText('Thank you for your order!');
        await expect(Sauce.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(Sauce.backHome).click();
    });
});
