class CreditCard { 
    get wholeCard() {
        return $('.card');
    }

    get chipIcon() {
        return $('.chip');
    }

    get wifiIcon() {
        return $('.ctn');
    }

    get cardNum() {
        return $('.numbers');
    }

    get holder() {
        return $('.holder');
    }

    get valid() {
        return $('.valid');
    }

    get visa() {
        return $('.logo')
    }
} 

const Card = new CreditCard();
export { Card };
