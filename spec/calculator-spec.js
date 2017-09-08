import {Calculator} from './../js/calculator.js';


describe('Calculator', function(){
  let calculator;
  beforeEach(function(){
    calculator = new Calculator("50");
  });
  it('should test to instantiate a calculator object', function(){
    expect(calculator.age).toEqual("50")
  });

});
