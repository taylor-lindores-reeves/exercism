<<<<<<< HEAD
import { isLeap } from "./leap";

describe("A leap year", () => {
  test("year not divisible by 4: common year", () => {
    expect(isLeap(2015)).toBe(false);
  });

  test("year divisible by 4, not divisible by 100: leap year", () => {
    expect(isLeap(2016)).toBe(true);
  });

  test("year divisible by 100, not divisible by 400: common year", () => {
    expect(isLeap(2100)).toBe(false);
  });

  test("year divisible by 400: leap year", () => {
    expect(isLeap(2000)).toBe(true);
  });

  test("year divisible by 200, not divisible by 400: common year", () => {
    expect(isLeap(1800)).toBe(false);
=======
var Year = require('./leap');

describe('Leap year', function () {
  it('is not very common', function () {
    var year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day', function () {
    var year = new Year(2016);
    expect(year.isLeap()).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day', function () {
    var year = new Year(1900);
    expect(year.isLeap()).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day', function () {
    var year = new Year(2000);
    expect(year.isLeap()).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', function () {
    it('is not a leap year', function () {
      var year = new Year(1978);
      expect(year.isLeap()).toBe(false);
    });

    it('is a common leap year', function () {
      var year = new Year(1992);
      expect(year.isLeap()).toBe(true);
    });

    it('is skipped every 100 years', function () {
      var year = new Year(2100);
      expect(year.isLeap()).toBe(false);
    });

    it('is reintroduced every 400 years', function () {
      var year = new Year(2400);
      expect(year.isLeap()).toBe(true);
    });
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
  });
});
