export class GalacticDate {
  constructor(age, date) {
    this.age = age;
    this.date = date;
  }

  checkAgeInSeconds(age) {
    const timeCount = 31536000;
    let timeSeconds = age * timeCount;
    return timeSeconds;
  }

  findAge(date){
    let today = new Date();
    let dateEntered = new Date(date);
    let age = today.getFullYear() - dateEntered.getFullYear();
    let m = today.getMonth() - dateEntered.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateEntered.getDate())) {
        age--;
    }
    return age;
  }

  ageIfOnEarth(age){
    const earth = 1;
    let ageEarth = Math.round((age * earth)*100)/100;
    return ageEarth;
  }

  ageIfOnMercury(age){
    const mercury = 0.24;
    let ageMercury = Math.round((age * mercury)*100)/100;
    return ageMercury;
  }

  ageIfOnVenus(age){
    const venus = 0.62;
    let ageVenus = Math.round((age * venus)*100)/100;
    return ageVenus;
  }

  ageIfOnMars(age){
    const mars = 1.88;
    let ageMars = Math.round((age * mars)*100)/100;
    return ageMars;
  }

  ageIfOnJupiter(age){
    const jupiter = 11.86;
    let ageJupiter = Math.round((age * jupiter)*100)/100;
    return ageJupiter;
  }

  ageIfOnSaturn(age){
    const saturn = 29.5;
    let ageSaturn = Math.round((age * saturn)*100)/100;
    return ageSaturn;
  }

  ageIfOnUranus(age){
    const uranus = 84.3;
    let ageUranus = Math.round((age * uranus)*100)/100;
    return ageUranus;
  }

  ageIfOnNeptune(age){
    const neptune = 164.79;
    let ageNeptune = Math.round((age * neptune)*100)/100;
    return ageNeptune;
  }


  demographicInfo(location, gender){
    let expirationDate = 0;
    if(gender === "female" && location === "Canada"){
      expirationDate = 84;
    } else if (gender === "male" && location === "Canada") {
      expirationDate = 80;
    } else if (gender === "female" && location === "France") {
      expirationDate = 86;
    } else if (gender === "male" && location === "France") {
      expirationDate = 80;
    } else if (gender === "female" && location === "Mexico") {
      expirationDate = 79;
    } else if (gender === "male" && location === "Mexico") {
      expirationDate = 75;
    } else if (gender === "female" && location === "Belarus") {
      expirationDate = 79;
    } else if (gender === "male" && location === "Belarus") {
      expirationDate = 69;
    } else if (gender === "female" && location === "Japan") {
      expirationDate = 87;
    } else if (gender === "male" && location === "Japan") {
      expirationDate = 71;
    } else if (gender === "female" && location === "Nigeria") {
      expirationDate = 53;
    } else if (gender === "male" && location == "Nigeria"){
      expirationDate = 53;
    } else {
      expirationDate = 74;
    } return expirationDate;
  }





}
