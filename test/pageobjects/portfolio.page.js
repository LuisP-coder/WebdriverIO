class Portfolio {
// Page Parts
    get homeIntro() {
        return $('#small-intro');
    }

    get memoji() {
        return $('#memoji');
    }

    projectCard(num) {
        return $(`.project-inner:nth-of-type(${num})`);
    }

    projectText(num) {
        return $(`.figcaption:nth-of-type(${num})`);
    }

    get biography() {
        return $('#background');
    }

    get resume() {
        return $('#resume');
    }

    get selfie() {
        return $('#selfie');
    }

    socials(num) {
        return $(`.social:nth-of-type(${num})`);
    }
}

const PortfolioV2 = new Portfolio();
export { PortfolioV2 };