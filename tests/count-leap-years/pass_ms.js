const countLeapYears = years => {
  const year = years.getUTCFullYear()
  let res = year * 97 / 400
  return Math.floor(res)
}

/*
Every 400 years we have 97 leap years so:
2020*97/400=489.85
use math.floor 
*/