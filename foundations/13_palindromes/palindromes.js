const palindromes = function (str) {
   let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

   str = str.toLowerCase().split("")
   .filter(item => alphanumerical.includes(item))
   .join("")

   let reverseStr = str.split("").reverse().join("")

   return str == reverseStr

};

// Do not edit below this line
module.exports = palindromes;
