const isLeapYear = (year = 2000) => {
  // Steps followed:
  // (taken from: https://learn.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year)
  // 1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
  // 2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
  // 3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
  // 4. The year is a leap year (it has 366 days).
  // 5. The year is not a leap year (it has 365 days).

  return year % 4 == 0
    ? (year % 100 == 0
      ? (year % 400 == 0 
        ? true
        : false
      ) 
      : true
    )
    : false;
};

function isLeapYearFn(year = 2000) {
  return year % 4 == 0
    ? (year % 100 == 0
      ? (year % 400 == 0 
        ? true
        : false
      ) 
      : true
    )
    : false;
}

module.exports = { isLeapYear, isLeapYearFn };