const findTheOldest = function(arr) {
  return arr.reduce((acc, curr)=> {
    const currentYear = new Date().getFullYear();
    const accYear = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;
    const currYear = (curr.yearOfDeath || currentYear) - curr.yearOfBirth;
    return accYear > currYear ? acc : curr;
  })
};


// Do not edit below this line
module.exports = findTheOldest;
