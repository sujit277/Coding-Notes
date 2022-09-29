describe('Calculator.js', function () {
    describe('Calculator', function () {
        let calculator;
        let calculator1;
        let calculator2;

        beforeEach(function () {
            calculator = new Calculator();
            calculator1 = new Calculator();
            calculator2 = new Calculator();
        })

        afterEach(function () {

        })

        it('should add number to the total', function () {
            //const calculator = new Calculator();
            calculator.add(5);
            expect(calculator.total).toBe(5);
        })

        it('should subtract number to the total', function () {
            //const calculator = new Calculator();
            calculator.total = 30;
            calculator.subtract(5);
            expect(calculator.total).toBe(25);
        })

        it('should multiply number to the total', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            calculator.multiply(5);
            expect(calculator.total).toBe(50);
        })

        it('should divide number to the total', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            calculator.divide(2);
            expect(calculator.total).toBe(5);
        })

        it('should intialize the total', function () {
            //const calculator = new Calculator();
            expect(calculator.total).toBe(0);
        })

        it('should Intialize the constructor', function () {
            //const calculator1 = new Calculator();
            //const calculator2 = new Calculator();
            expect(calculator1).toBeTruthy();
            expect(calculator1).not.toBeFalsy();
            expect(calculator1).toEqual(calculator2);
        })

        it('should have unique calculator object', function () {
            //const calculator1 = new Calculator();
            //const calculator2 = new Calculator();
            expect(calculator1).not.toBe(calculator2);
        })

        it('should have common methods', function () {
            //const calculator = new Calculator();
            expect(calculator.add).not.toBeUndefined();
            expect(calculator.subtract).not.toBeUndefined();
            expect(calculator.multiply).not.toBeUndefined();
            expect(calculator.divide).not.toBeUndefined();
        })

        it('can override total value', function () {
            //const calculator = new Calculator();
            calculator.total = null;
            expect(calculator.total).toBeNull();
        })

        it('should have the calculator constructor', function () {
            //const calculator = new Calculator();
            let arr = [1, 2, 3, 4];
            expect(arr).toContain(3);
            expect(calculator.constructor.name).toContain('alc');
        })

        it('does not handle NaN for multiply', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            calculator.multiply('a');
            expect(calculator.total).toBeNaN();
        })

        it('should throw error when divide by zero', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(function () { calculator.divide(0) }).toThrow();
            expect(function () { calculator.divide(0) }).toThrow(new Error('number cannot be zero'));
        })

        it('should throw error with message when divide by zero', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(function () { calculator.divide(0); }).toThrowError();
            expect(function () { calculator.divide(0); }).toThrowError('number cannot be zero');
        })

        it('should return total as number', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(calculator.add(10)).toBe(20);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('ber');
        })

        it('should return total as value', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(calculator.total).toEqual(jasmine.anything());
        })

        it('should be an instance', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(calculator).toEqual(jasmine.any(Object));
            expect(calculator).toEqual(jasmine.any(Calculator));
            expect(calculator.total).toEqual(jasmine.any(Number));
        })

        it('should contain total as key', function () {
            //const calculator = new Calculator();
            calculator.total = 10;
            expect(calculator).toEqual(jasmine.objectContaining({
                total: 10
            }));
            expect(typeof calculator.total).toEqual(jasmine.stringContaining('mbe'));
        })

    })

})