import {GalacticDate} from './../js/date.js';


describe('GalacticDate', function(){
  let moment = require('moment');
  let date;
  let testDate;
  let dateToTest;
  let currentDateTest;
  let dateEntered;
  beforeEach(function(){
    testDate = "1978-29-05";
    date = new GalacticDate();
    dateEntered = date.findAge("1978/05/29")
    dateToTest = moment(testDate);
    currentDateTest = moment();
  });

  it('should test if an age is returned in number of seconds', function(){
    expect(date.checkAgeInSeconds(1)).toEqual(31536000)
  });

  it('should return age of user', function(){
    let dateEntered = "1978/05/29"
    expect(date.findAge(dateEntered)).toEqual(39)
  });

  it('should return the difference of a users age and current date in seconds', function(){
  expect(date.checkAgeInSeconds(dateEntered)).toEqual(1229904000)
  });

  it('should return age of user on Earth', function(){
  expect(date.ageIfOnEarth(dateEntered)).toEqual(39)
  });

  it('should return age of user on Mercury', function(){
  expect(date.ageIfOnMercury(dateEntered)).toEqual(9.36)
  });

  it('should return age of user on Venus', function(){
  expect(date.ageIfOnVenus(dateEntered)).toEqual(24.18)
  });

  it('should return age of user on Mars', function(){
  expect(date.ageIfOnMars(dateEntered)).toEqual(73.32)
  });

  it('should return age of user on Jupiter', function(){
  expect(date.ageIfOnJupiter(dateEntered)).toEqual(462.54)
  });

  it('should return age of user on Saturn', function(){
  expect(date.ageIfOnSaturn(dateEntered)).toEqual(1150.50)
  });

  it('should return age of user on Uranus', function(){
  expect(date.ageIfOnUranus(dateEntered)).toEqual(3287.70)
  });

  it('should return age of user on Neptune', function(){
  expect(date.ageIfOnNeptune(dateEntered)).toEqual(6426.81)
  });

  it('should calculate the difference between two dates in seconds', function() {
  let test = dateToTest.diff(testDate, 'seconds');
  expect(date.checkTimeBetween(testDate)).toEqual(test)
  });

  it('should calculate the difference in life expectency age and earth age', function(){
  let earthAge = date.ageIfOnEarth(dateEntered)
  let country = "Canada"
  let gender = "female"
  let expirationDate = date.demographicInfo(country, gender);
  expect(expirationDate - earthAge).toEqual(45);
  });

  it('should return true if the users age is past the epiration date', function(){
    let earthAge = date.findAge("1978/05/29")
    let country = "Canada"
    let gender = "female"
    let expirationDate = date.demographicInfo(country, gender);
    expect(date.checkIfExpired(earthAge)).toEqual(true);
  });

});
