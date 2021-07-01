class Gigasecond {
  getDate: Date;

  constructor(d: Date) {
    this.getDate = d;
  }

  date() {
    return new Date(Math.pow(10, 9) * 1000 + this.getDate.getTime());
  }
}

export default Gigasecond;
