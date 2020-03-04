# Leap

Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

<<<<<<< HEAD
```text
=======
```plain
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
```

For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
year, but 2000 is.

<<<<<<< HEAD
=======
If your language provides a method in the standard library that does
this look-up, pretend it doesn't exist and implement it yourself.

>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
## Notes

Though our exercise adopts some very simple rules, there is more to
learn!

For a delightful, four minute explanation of the whole leap year
phenomenon, go watch [this youtube video][video].

[video]: http://www.youtube.com/watch?v=xX96xng7sAE

## Setup

<<<<<<< HEAD
Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.
=======
Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://exercism.io/languages/javascript/installation

## Making the Test Suite Pass

Execute the tests with:

    jasmine <exercise-name>.spec.js

Replace `<exercise-name>` with the name of the current exercise. E.g., to
test the Hello World exercise:

    jasmine hello-world.spec.js

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e

## Source

JavaRanch Cattle Drive, exercise 3 [http://www.javaranch.com/leap.jsp](http://www.javaranch.com/leap.jsp)

## Submitting Incomplete Solutions
<<<<<<< HEAD

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.
=======
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
