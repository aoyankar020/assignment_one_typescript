"use strict";
// ====================== problem - 1 ============================problem - 1
function formatString(input, toUpper) {
    let isTrue = toUpper !== false;
    return isTrue ? input.toUpperCase() : input.toLowerCase();
}
const data = formatString("Hello");
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 4.0 },
];
function filterByRating(items) {
    const data = items.filter((item) => item.rating >= 4);
    return data;
}
const result = filterByRating(books);
console.log(filterByRating(result));
// ====================== problem - 3 ============================
function concatenateArrays(...arrays) {
    const result = arrays.flat();
    return result;
}
console.log(concatenateArrays([9, " ", 6], [0, 9, 7, 6], [0, 9, 7, 6]));
// ====================== problem - 4 ============================
class Vehicle {
    constructor(make, year) {
        this._make = make;
        this._year = year;
    }
    getInfo() {
        console.log(`Make:${this._make} Year:${this._year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this._model = model;
    }
    getModel() {
        console.log(`Model:${this._model}`);
    }
}
const myCar = new Car("Toyota", 2020, "104E");
let info = myCar.getInfo();
let model = myCar.getModel();
// ====================== problem - 5 ============================
function processValue(value) {
    let length = 0;
    if (typeof value === "string") {
        length = value.length;
    }
    else if (typeof value === "number") {
        length = value * 2;
    }
    return length;
}
console.log(processValue("2"));
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct);
}
const products = [
    { name: "Pen", price: 1000 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "Bag", price: 900 },
];
console.log(getMostExpensiveProduct(products));
// ====================== problem - 7 ============================
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Friday || day === Day.Saturday) {
        return "Weekend";
    }
    return "Weekday";
}
console.log(getDayType(Day.Friday));
// ====================== problem - 8 ============================
async function squareAsync(num) {
    if (num < 0) {
        throw new Error("Negative number not allowed");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}
