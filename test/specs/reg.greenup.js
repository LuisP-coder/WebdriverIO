import Green from '../pageobjects/greenup.page.js';

describe('Verify GreenUp Mock Page', () => {
    before('Open page', async() => {
        await browser.url('https://luisp-coder.github.io/GreenUpMock/');
    });

    it('Verify Navbar is displayed and has its content', async() => {
        await expect(Green.nav).isDisplayed();
        await expect(Green.navTitle).toHaveText('Green Up');
        // Nav Bar Items
        await expect(Green.navLink(0)).toHaveText('About');
        await expect(Green.navLink(1)).toHaveText('Contact');
        await expect(Green.navLink(2)).toHaveText('Find Us');
    });

    it('Verify Home section contents', async() => {
        await expect(Green.home).isDisplayed();
        await expect(Green.slide).isDisplayed();
        // Clicks on next and previous button
        await expect(Green.prevBtn).click();
        await browser.pause(3000);
        await expect(Green.nextBtn).click();
    });

    it('Verify Company info section', async() => {
        await expect(Green.info).toHaveText(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos ex officiis rem magnam ', 
            'doloribus totam sequi sit qui, aliquid error explicabo? Possimus facere eaque quis nihil deleniti ',
            'veritatis quibusdam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
            'Reprehenderit ratione fugit odio neque laudantium, animi impedit illo corporis nemo officia. ',
            'Voluptates, rem harum commodi consequatur deserunt consectetur? Quia, laborum veritatis? ',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim officia accusamus ',
            'eaque possimus praesentium dolor sit cum ad debitis dolores repudiandae dicta ab repellat ',
            'ullam id aliquam, deleniti rem!'
        );
        await expect(Green.card(0)).toHaveText('Meet the team');
        await expect(Green.card(1)).toHaveText('Locations'); 
        await expect(Green.card(2)).toHaveText('Headquarters');
    });

    it('Verify FAQ Section', async() => {
        await expect(Green.faq(0)).toHaveText('Do you offer free shipping?')
        await expect(Green.faqButton(0)).click();
        await expect(Green.innerFaq(0)).toHaveText(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            'Assumenda beatae pariatur quo reprehenderit exercitationem quam animi rerum neque temporibus omnis? ',
            'Magni tempore quisquam molestiae fuga accusantium eum atque, accusamus error!'
        );

        await expect(Green.faq(1)).toHaveText('Do you accept Debit/Credit?')
        await expect(Green.faqButton(1)).click();
        await expect(Green.innerFaq(1)).toHaveText(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            'Assumenda beatae pariatur quo reprehenderit exercitationem quam animi rerum neque temporibus omnis? ',
            'Magni tempore quisquam molestiae fuga accusantium eum atque, accusamus error!'
        );

        await expect(Green.faq(2)).toHaveText('Where is the office?')
        await expect(Green.faqButton(2)).click();
        await expect(Green.innerFaq(2)).toHaveText(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            'Assumenda beatae pariatur quo reprehenderit exercitationem quam animi rerum neque temporibus omnis? ',
            'Magni tempore quisquam molestiae fuga accusantium eum atque, accusamus error!'
        );
    });

    it('Verify Contact Us Page', async() => {
        await expect(Green.contactInfo).toHaveText(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente a laborum rerum quo possimus ',
            'libero consequatur, incidunt sequi recusandae nostrum excepturi non, magni fugiat veritatis. ',
            'Sit repellat dolore iste laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
            'Delectus magni corporis ducimus commodi doloribus repellendus voluptate quos beatae a, non, rem ',
            'eius aperiam, expedita eum! Rerum consectetur placeat labore saepe!'
        );

        await expect(Green.name(0)).click();
        await expect(Green.name(0)).setValue('Luis');

        await expect(Green.name(1)).click();
        await expect(Green.name(1)).setValue('Perez');

        await expect(Green.email).click();
        await expect(Green.email).setValue('luisexample@gmail.com');
    });

    it('Verify footer info', async() => {
        await expect(Green.future(0)).toHaveText('Future of Clean Energy');
        await expect(Green.future(1)).toHaveText(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            'Aperiam beatae autem non sapiente vero id quasi, sed animi ',
            'excepturi, quam minima numquam debitis quos sequi ducimus? ',
            'Rem nihil eaque fugit?'
        );
    });
});
