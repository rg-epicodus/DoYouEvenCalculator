export class GalacticDate {
  constructor(age, date) {
    this.age = age;
    this.date = date;
  }

  checkAgeInSeconds(age) {
    const yearsToSeconds = 31536000;
    let ageInSeconds = age * yearsToSeconds;
    return ageInSeconds;
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
    return ageEarth
  }

  ageIfOnMercury(age){
    const mercury = 0.24;
    let ageMercury = Math.round((age * mercury)*100)/100;
    return ageMercury
  }

  ageIfOnVenus(age){
    const venus = 0.62;
    let ageVenus = Math.round((age * venus)*100)/100;
    return ageVenus
  }

  ageIfOnMars(age){
    const mars = 1.88;
    let ageMars = Math.round((age * mars)*100)/100;
    return ageMars
  }

  ageIfOnJupiter(age){
    const jupiter = 11.86;
    let ageJupiter = Math.round((age * jupiter)*100)/100;
    return ageJupiter
  }








}
