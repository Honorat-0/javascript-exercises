const sumAll = function(a, b) {

    if (parseInt(a) !== a || parseInt(b) !== b || a < 0 || b < 0 ) {
        return "ERROR";
    }

    let result = 0;

    if(a < b) {
        for(a; a <= b; a++){
            result += a;
        }
    } else if (a > b) {
        for(b; b <= a; b++){
            result += b;
        }
    } else {
        return "ERROR"
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
