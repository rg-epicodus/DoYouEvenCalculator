export class GalacticDate {
  constructor(age, date) {
    this.age = age;
    this.date = date;
  }

  checkAgeInSeconds(age) {
    const yearsToSeconds = 31536000;
    let ageInSeconds = age * yearsToSeconds;
    return ageInSeconds;
    // const minute = 1000 * 60;
    // const hour = minute * 60;
    // const day = hour * 24;
    //
    // date = new GalacticDate(dateEntered, dateCurrent);
    // let time = date.getTime();
    //
    // return time;
  }
}
