class SmartCalculator {
    constructor(initialValue) {
        var a = {};
        this.mas = [];

        a.num = initialValue;
        a.type = '+';

        this.mas.push(a);
    }

    add(number) {
        var a = {};
        a.num = +number;
        a.type = '+';
        this.mas.push(a);
        return this;
    }

    subtract(number) {
        var a = {};
        a.num = -1 * number;
        a.type = '+';
        this.mas.push(a);
        return this;
    }

    multiply(number) {
        var a = {};
        a.num = +number;
        a.type = '*';
        this.mas.push(a);
        return this;
    }

    devide(number) {
        var a = {};
        a.num = +number;
        a.type = '/';
        this.mas.push(a);
        return this;
    }

    pow(number) {
        var a = {};
        a.num = +number;
        a.type = 'p';
        this.mas.push(a);
        return this;
    }

    value() {
        calcPow(this.mas);
        calcMult(this.mas);
        calcDev(this.mas);
        calcAdd(this.mas);
        return this.mas[0].num;
    }

    toString() {
        return this.value();
    }
}


function calcPow(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i].hasOwnProperty('type')) {
            if (arr[i].type == 'p') {
                var d = Math.pow(arr[i - 1].num, arr[i].num);
                if ((arr[i - 1].num < 0) && (d > 0)) {
                    d = -1 * d;
                }
                arr[i - 1].num = d;
                arr.splice(i, 1);
                calcPow(arr);
                break;
            }
        }
    }
}

function calcMult(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i].hasOwnProperty('type')) {
            if (arr[i].type == '*') {
                var d = (arr[i - 1].num * arr[i].num);
                arr[i - 1].num = d;
                arr.splice(i, 1);
                calcMult(arr);
                break;
            }
        }
    }
}

function calcDev(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i].hasOwnProperty('type')) {
            if (arr[i].type == '/') {
                var d = (arr[i - 1].num / arr[i].num);
                arr[i - 1].num = d;
                arr.splice(i, 1);
                calcDev(arr);
                break;
            }
        }
    }
}

function calcAdd(arr) {
    var d = arr[0].num;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].hasOwnProperty('type')) {
            if (arr[i].type == '+') {
                d = d + arr[i].num;
            }
        }
    }
    arr.splice(1, arr.length - 1);
    arr[0].num = d;
}

module.exports = SmartCalculator;
