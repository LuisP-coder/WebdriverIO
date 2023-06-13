class ScoreKeeper {
    get card() {
        return $('.card');
    }

    get title() {
        return $('.card-header-title');
    }

    get counter() {
        return $('.title')
    }

    get subtitle() {
        return $('.subtitle');
    }

    get dropdown() {
        return $('select.dropdown');
    }

    get playerOne() {
        return $('#p1Button');
    }

    get reset() {
        return $('#reset');
    }
}

const Score = new ScoreKeeper();

export { Score };