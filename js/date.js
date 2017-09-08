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

  findDate(date){
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













}
