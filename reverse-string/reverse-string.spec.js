<<<<<<< HEAD
import { reverseString } from "./reverse-string";

describe("ReverseString", () => {
  test("empty string", () => {
    const expected = "";
    const actual = reverseString("");
    expect(actual).toEqual(expected);
  });

  test("a word", () => {
    const expected = "tobor";
    const actual = reverseString("robot");
    expect(actual).toEqual(expected);
  });

  test("a capitalized word", () => {
    const expected = "nemaR";
    const actual = reverseString("Ramen");
    expect(actual).toEqual(expected);
  });

  test("a sentence with punctuation", () => {
    const expected = "!yrgnuh ma I";
    const actual = reverseString("I am hungry!");
    expect(actual).toEqual(expected);
  });

  test("a palindrome", () => {
    const expected = "racecar";
    const actual = reverseString("racecar");
=======
var reverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    var expected = '';
    var actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  it('a word', function () {
    var expected = 'tobor';
    var actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  it('a capitalized word', function () {
    var expected = 'nemaR';
    var actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  it('a sentence with punctuation', function () {
    var expected = '!yrgnuh ma I';
    var actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('a palindrome', function () {
    var expected = 'racecar';
    var actual = reverseString('racecar');
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
    expect(actual).toEqual(expected);
  });
});
