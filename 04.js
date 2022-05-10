// Ex.4 Create a function that takes an array of strings and returns an array with only the
// strings that have numbers in them. If there are no strings containing numbers, return an
// empty array

const numInStr = (arr) => {
let findedStr = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    if ((arr[i][j]) == parseInt(arr[i][j])) {
        findedStr.push(arr[i]);
        break;
    }
    }
}
return findedStr;
};
console.log(numInStr(["a", "c2b", "btu"]));
console.log(numInStr(["abc"]));
console.log(numInStr(["abc", "ab10c", "0bc", "bcd"]));
console.log(parseInt(["c2b"])); //NaN
// As we see the whole string can not be converted because parseInt 
// starts from the first left character and when there is no number at first it returns NaN,
// but in for loop it divides to lonely characters and each charachter individually converted.