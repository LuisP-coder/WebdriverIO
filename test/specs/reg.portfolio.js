// Pages
import { PortfolioV2 } from '../pageobjects/portfolio.page.js'

/* Mock team WDIO Suite Owner */
// const owner = "Growth";


describe('Verify Portfolio Page', () => {
    let pageUrl = 'https://luisp-coder.github.io/PortfolioV2/';
    let resumeUrl = 'https://docs.google.com/document/d/1_15oygLPrbS8EtacTA5YWfIaXcxlOAZd/edit';
    let linkedInUrl = 'https://www.linkedin.com/in/luis-perez-6a9338184/';
    let playstationUrl = 'https://github.com/LuisP-coder';

    // Mock functions
    // beforeEach(async () => {
    //     // allure.owner(owner);
    
    // }); 

    // afterEach(async () => {
    //     // allure.owner(owner);
    // });

    it('Open Portfolio page', async() => {
        // allure.owner(owner);
        // allure.startStep('Open page and verify url');
        browser.url(pageUrl);
        await browser.pause(10000);
    });

    it('Verify Home page text and image', async() => {
        // allure.owner(owner);
        // allure.startStep('Verify front page text', true);
        await expect(PortfolioV2.homeIntro).toHaveText(
            'A Quality Assurance Engineer and an aspiring Web Developer based in SF Bay Area.'
        );

        // allure.startStep('Verify Image is displayed', true); 
        await PortfolioV2.memoji.isDisplayed();
    });

    it('Verify Project Card and text inside', async() => {
        // allure.owner(owner);
        // allure.startStep('Verify Cards are displayed', true);

        for(let i = 0; i < 4; i++) {
            await expect(PortfolioV2.projectCard([i])).isDisplayed();
        }

        // allure.startStep('Verify text for first project card', true);
        await expect(PortfolioV2.projectText(1)).toHaveText(
            'App includes current temperature in celsius, wind speed,',
            'and humidity.'
        );

        // allure.startStep('Verify text for second project card', true);
        await expect(PortfolioV2.projectText(2)).toHaveText(
            'Count the score of your game using this app. Goes up to 11 points.'
        );

        // allure.startStep('Verify text for third project card', true);
        await expect(PortfolioV2.projectText(3)).toHaveText(
            'Simple calculator app using JS'
        );

        // allure.startStep('Verify text for fourth project card', true);
        await expect(PortfolioV2.projectText(4)).toHaveText(
            'Green Energy Mock Website discussing the use of Solar Panels..'
        );
    });

    it('Verify text, resume and picture for About me page', async() => {
        // allure.startStep('Verify biography section text');
        await expect(PortfolioV2.biography).toHaveText(
            'Coming from an immigrant family, I learned to appreciate,',
            ' take initiative, and take advantage of the opportunities',
            ' that I have. By making my family proud and inspiring',
            ' others alike, I enrolled in the YearUp program which',
            ' led to an internship at Momentive.ai and eventually',
            ' landed a Full-Time roll as a Quality Assurance Engineer.',
            ` But I didn't stop there. Every once in a while I would`,
            ' study and build small apps to help grow my skills'
        );

        // allure.startStep('Check resume link takes user to google doc');
        await PortfolioV2.resume.click();
        await browser.toHaveUrlContaining(resumeUrl);
        await browser.closeTab();
        await browser.switchTab([0]);

        // allure.startStep('Verify picture is shown');
        await PortfolioV2.selfie.isDisplayed();
    });

    it('Verify Contact Me links are working', async() => {
        // allure.startStep('Verify LinkedIn Link');
        await PortfolioV2.socials(1).click();
        await browser.toHaveUrlContaining(linkedInUrl);
        await browser.switchTab([0]);

        // allure.startStep('Verify GitHub Link');
        await PortfolioV2.socials(2).click();
        await browser.toHaveUrlContaining(playstationUrl);
    });
});
