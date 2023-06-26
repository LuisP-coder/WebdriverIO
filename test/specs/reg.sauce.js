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

    it('Add items to cart', async() => {
        await expect(Sauce.addToCart(1)).click();
        await expect(Sauce.addToCart(2)).click();
        await expect(Sauce.cart).click();

        // remove items
        await expect(Sauce.removeCart(1)).click();
    });
});
