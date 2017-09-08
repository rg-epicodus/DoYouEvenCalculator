import {GalacticDate} from './../js/date.js';


describe('GalacticDate', function(){
  let date;
  beforeEach(function(){
    date = new GalacticDate();
  });

  it('should test if an age is returned in number of seconds', function(){
    expect(date.checkAgeInSeconds(1)).toEqual(31536000)
  });

  it('should return age of user', function(){
    let dateEntered = "1978/05/29"
    expect(date.findDate(dateEntered)).toEqual(39)
  });

  it('should return the difference of a users age and current date in seconds', function(){
  let dateEntered = date.findDate("1978/05/29")
  expect(date.checkAgeInSeconds(dateEntered)).toEqual(1229904000)
  });

  it('should return age of user on Earth', function(){
  let dateEntered = date.findDate("1978/05/29")
  expect(date.ageIfOnEarth(dateEntered)).toEqual(39)
});

});
