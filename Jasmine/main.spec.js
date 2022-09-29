describe('main.js', function () {
    describe('main()', function () {
        it('Validate Expression if the first number is invalid',function(){
            spyOn(window,'updateResult').and.stub();
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('Validate Expression if the second number is invalid',function(){
            spyOn(window,'updateResult').and.stub();
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('Validate Expression if the operator is invalid',function(){
            spyOn(window,'updateResult').and.stub();
            calculate('3_3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('Calls add',function(){
            spyOn(Calculator.prototype,'add');
            //const spy = spyOn(Calculator.prototype,'add');
            calculate('3+2');
            //expect(spy).toHaveBeenCalled();
            expect(Calculator.prototype.add).toHaveBeenCalled();
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(2);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
        });

        it('Calls subtract', function(){
            const spy  = spyOn(Calculator.prototype,'subtract');
            calculate('3-2');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('Calls multiply',function(){
            const spy  = spyOn(Calculator.prototype,'multiply');
            calculate('3*2');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);
        })

        it('Calls divide',function(){
            const spy  = spyOn(Calculator.prototype,'divide');
            calculate('6/2');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('calls UpdateResult (Using callThrough)',function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.callThrough();
            calculate('3*3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(9);
        })   

        it('calls UpdateResult (Using callFake)',function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.callFake(function(){
                return 9;
            });
            calculate('3*3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(9);
        })  

        it('calls UpdateResult (Using returnValue)',function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.returnValue(9);
            calculate('3*3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(9);
        })

        it('Does not handle errors',function(){
            spyOn(Calculator.prototype,'multiply').and.throwError('Some error');
            expect(function(){
                calculate('3*3');
            }).toThrowError('Some error');
        })

    })


    describe('updatedResult', function () {

        let element; 

        beforeAll(function () {
            element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            //this.element = element
        })

        afterAll(function () {
            const element = document.getElementById('result');
            document.body.removeChild(element);
            //document.body.removeChild(this.element);
        })

        it('Add result to the DOM Element', function () {
            updateResult(5);
            expect(element.innerText).toBe('5');
            //expect(this.element.innerText).toBe('5');
        });
    })
})