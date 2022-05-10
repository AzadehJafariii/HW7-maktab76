
// Ex.5 Implementation filter-find-slice-splice-some



//filter

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
let newArr = [];
fruits.forEach(function(item) {
    if (item.includes("an")) {
        newArr.push(item);
    }
});
console.log(newArr);


// let newArr = fruits.filter(item => item.includes("an"));
// console.log(newArr);

// ....................................................................

//find

let obj = [
    { name: 'Max', age: 23 },
    { name: 'John', age: 20 },
    { name: 'Caley', age: 18 }
];

function findOldest(obj){
    const [{age:age1}, {age:age2}, {age:age3}] = obj;
    let newArr = [age1, age2, age3];
    let max = Math.max(...newArr);
    obj.forEach(function(item){
        if(item.age == max){
            console.log(item);
        }
    })
}
findOldest(obj);


// let x = obj.find(function(item){
//     return Math.max(item.age);
// })
// console.log(x);

// ..................................................................

//slice
let fruitsy = ['apple', 'banana', 'grapes', 'mango'];

let [fruit1, fruit2, fruit3, fruit4] = fruitsy;
let subtractedArr1 = [fruit1];
let subtractedArr = [fruit3];
console.log([...subtractedArr1,...subtractedArr]);


// let subtractedArr1 = fruits.slice(0,1);
// let subtractedArr = fruits.slice(2,3);
// console.log([...subtractedArr1,...subtractedArr]);

// ................................................................

//splice

function replaceWord(string){
    let newString = string.replace("Javascript." , "JS." );
    return newString;

}
console.log(`"${replaceWord("I Love Javascript.")}"`);


// let string = "I Love Javascript.";
// let newString = string.split(" ");
// let result = newString.splice(2, 1, "JS.");
// newString = newString.join(" ");
// console.log(`"${newString}"`);

// ................................................................

//some

function isBigger(array) {
    for (let i=0; i< array.length; i++){
        if(array[i]>10){
            return true;
        }
        return false;
    }
}
console.log(isBigger([2, 5, 8, 1, 4]));// false
console.log(isBigger([12, 5, 8, 1, 4]));// true


// function isBigger(element, index, array) {
//     return element > 10;
// }
// let result = [2, 5, 8, 1, 4].some(isBigger);  // false
// let result1 = [12, 5, 8, 1, 4].some(isBigger); // true
// console.log(result);
// console.log(result1);

