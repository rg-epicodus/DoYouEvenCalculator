import {GalacticDate} from './../js/date.js';


describe('GalacticDate', function(){
  let date;
  beforeEach(function(){
    date = new GalacticDate();
  });

  it('should test if an age is returned in number of seconds', function(){
    expect(date.checkAgeInSeconds(1)).toEqual(31536000)
  });

  it('should find birthday of user', function(){
    let dateEntered = "1978/05/29"
    expect(date.findDate(dateEntered)).toEqual(23)
  })

});
