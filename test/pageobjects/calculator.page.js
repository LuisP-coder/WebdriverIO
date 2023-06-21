class Math {
    get input() {
        return $('.calculator-input');
    }

    get button() {
        return $('button');
    }

    operator() {
        return $('.operator');
    }

    get clear() {
        return $('.clear');
    }

    get equal() {
        return $('.equal-sign');
    }
}
const Calculator = new Math();
export { Calculator }