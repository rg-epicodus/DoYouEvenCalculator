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
    expect(date.findAge(dateEntered)).toEqual(39)
  });

  it('should return the difference of a users age and current date in seconds', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.checkAgeInSeconds(dateEntered)).toEqual(1229904000)
  });

  it('should return age of user on Earth', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnEarth(dateEntered)).toEqual(39)
  });

  it('should return age of user on Mercury', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnMercury(dateEntered)).toEqual(9.36)
  });

  it('should return age of user on Venus', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnVenus(dateEntered)).toEqual(24.18)
  });

  it('should return age of user on Mars', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnMars(dateEntered)).toEqual(73.32)
  });

  it('should return age of user on Jupiter', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnJupiter(dateEntered)).toEqual(462.54)
  });

  it('should return age of user on Saturn', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnSaturn(dateEntered)).toEqual(1150.50)
  });

  it('should return age of user on Uranus', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnUranus(dateEntered)).toEqual(3287.70)
  });

  it('should return age of user on Neptune', function(){
  let dateEntered = date.findAge("1978/05/29")
  expect(date.ageIfOnNeptune(dateEntered)).toEqual(6426.81)
  });


});
