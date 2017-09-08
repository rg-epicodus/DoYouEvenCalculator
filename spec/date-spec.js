import {Date} from './../js/date.js';


describe('Date', function(){
  let date;
  beforeEach(function(){
    date = new Date("05/29/1978");
  });
  it('should test to instantiate a date object', function(){
    expect(date.dateEntered).toEqual("05/29/1978")
  });

});
