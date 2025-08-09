// Write a javascript program to implement Built in Functions & Methods.

//number
console.log("Built-in Functions and Methods:");
console.log("Number Methods:");
let num = Number(prompt("Enter a number: "));
console.log(`Round of ${ num } is :`,Math.round(num)); // 11
console.log(`Floor of ${num}`,Math.floor(num)); // 10
console.log(`Ceil of ${num}`,Math.ceil(num)); // 11
console.log("Random Number:", Math.random()); // Random number between 0 and 1
console.log("Square Root of 16:", Math.sqrt(16)); // 4  

//string
console.log("String Methods:");
let str = String(prompt("Enter a string: "));
console.log(`Upper of ${str} :`,str.toUpperCase()); // "HELLO WORLD"
console.log(`Lower of ${str}`,str.toLowerCase()); // "hello world"
console.log(`Lenght of ${str}`,str.length); // 11
console.log(`Index of World`,str.indexOf("World")); // 6
console.log(`Slice from o to 5 is`,str.slice(0, 5)); // "Hello"
console.log(`Replace World with Everyone`,str.replace("World", "Everyone")); // "Hello Everyone"

//array
console.log("Array Methods:");
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(`Add new Element in ${arr}`,arr.push(6)); // 6 (new length)
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(`Pop last element from ${arr}`,arr.pop()); // 6
console.log(arr); // [1, 2, 3, 4, 5]
console.log(`Shift remove first element from ${arr}`,arr.shift()); // 1
console.log(arr); // [2, 3, 4, 5]
console.log(`Unshift element at o index of arr ${arr}`,arr.unshift(0)); // 5 (new length)
console.log(arr); // [0, 2, 3, 4, 5]
console.log(`Index of 3 in arr ${arr}`,arr.indexOf(3)); // 2
console.log(arr); // [0, 2, 3, 4, 5]
console.log(arr.slice(1, 3)); // [2, 3]
consolelog(arr); // [0, 2, 3, 4, 5]
console.log(arr.join(", ")); // "0, 2, 3, 4"
console.log(arr); // [0, 2, 3, 4, 5]

//Additional Number Methods
console.log("\nAdditional Number Methods:");
let nums = 12.36588;
console.log(`Original number: ${nums}`);
console.log(`Fixed to 2 decimal places: ${nums.toFixed(2)}`); // "12.37"

//object
console.log("\nObject Methods:");
let obj = {name: "John", age: 30};    
console.log("Object initial state:", obj);
console.log(`Accessing with dot notation - name: ${obj.name}`);
console.log(`Accessing with dot notation - age: ${obj.age}`);
console.log(`Accessing with bracket notation - name: ${obj["name"]}`);
console.log(`Accessing with bracket notation - age: ${obj["age"]}`);
obj["name"] = "Jane";
console.log("Object after modification:", obj);

// Date
console.log("\nDate Methods:");
let date = new Date();
console.log("Current Date Object:", date);
console.log(`Year: ${date.getFullYear()}`);
console.log(`Month: ${date.getMonth() + 1}`); // Adding 1 since months are 0-based
console.log(`Day: ${date.getDate()}`);
console.log(`Hours: ${date.getHours()}`);
console.log(`Minutes: ${date.getMinutes()}`);
console.log(`Seconds: ${date.getSeconds()}`);

// Type checking
console.log("\nType Checking:");
console.log(`Type of num: ${typeof num}`);
console.log(`Type of str: ${typeof str}`);
console.log(`Type of arr: ${typeof arr}`);
console.log(`Type of obj: ${typeof obj}`);
console.log(`Type of date: ${typeof date}`);

