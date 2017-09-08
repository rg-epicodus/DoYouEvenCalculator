import {GalacticDate} from './../js/date.js';


describe('GalacticDate', function(){
  let date;
  beforeEach(function(){
    date = new GalacticDate();
  });

  it('should test if an age is returned in number of seconds', function(){
    expect(date.checkAgeInSeconds(1)).toEqual(31536000)
  });


});
