// Ex.2
// Create a function that identifies the very first item that has recurred in the string
// argument passed. It returns the identified item with the index where it first appeared and
// the very next index where it resurfaced -- entirely as an object; or as an empty object if the
// passed argument is either null, undefined, empty string, or no recurring item exists.
// recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
// recurIndex("") ➞ {}
// recurIndex(null) ➞ {}



function recurIndex(string) {
let chars = string.split("");
let temp = "";
let index = [];
for (let i = 0; i < string.length-1; i++) {
    for (let j = i+1; j < string.length; j++){
        if(chars[i] === chars[j]){
        temp = chars[i];
        index = [i];
        continue;
        }
    }
}
return `{"${temp}": [${index}]}`;
};

console.log(recurIndex("AREDCBSDERD"));//{"D": [3, 7]}
console.log(recurIndex(""));//{}
console.log(recurIndex(null));// {}
