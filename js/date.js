export class Date {
  constructor(dateEntered) {
    this.dateEntered = dateEntered;
  }

  checkDate() {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    date = new Date("1/1/2001");
    let time = date.getTime();

    // (Math.round(time / day) + " days from 1/1/1970 to 1/1/2001");
  }
}
