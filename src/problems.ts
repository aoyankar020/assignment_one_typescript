// ====================== problem - 1 ============================problem - 1
function formatString(input: string, toUpper?: boolean): string {
  let isTrue = toUpper !== false;

  return isTrue ? input.toUpperCase() : input.toLowerCase();
}
const data = formatString("Hello");

// ====================== problem - 2 ============================
type items = {
  title: string;
  rating: number;
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book C", rating: 4.0 },
];
function filterByRating(items: Array<items>): Array<items> {
  const data: Array<items> = items.filter((item) => item.rating >= 4);
  return data;
}
const result: Array<items> = filterByRating(books);
console.log(filterByRating(result));

// ====================== problem - 3 ============================
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.flat();
  return result;
}
console.log(concatenateArrays([9, " ", 6], [0, 9, 7, 6], [0, 9, 7, 6]));

// ====================== problem - 4 ============================
class Vehicle {
  private _make: string;
  private _year: number;
  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo() {
    console.log(`Make:${this._make} Year:${this._year}`);
  }
}
class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
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
function processValue(value: string | number): number {
  let length: number = 0;
  if (typeof value === "string") {
    length = value.length;
  } else if (typeof value === "number") {
    length = value * 2;
  }
  return length;
}
console.log(processValue("2"));

// ====================== problem - 6 ============================
interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[] | []): Product | null {
  if (products.length === 0) return null;

  return products.reduce((maxProduct, currentProduct) =>
    currentProduct.price > maxProduct.price ? currentProduct : maxProduct
  );
}
const products = [
  { name: "Pen", price: 1000 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
  { name: "Bag", price: 900 },
];
console.log(getMostExpensiveProduct(products));

// ====================== problem - 7 ============================
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === Day.Friday || day === Day.Saturday) {
    return "Weekend";
  }

  return "Weekday";
}
console.log(getDayType(Day.Friday));

// ====================== problem - 8 ============================
async function squareAsync(num: number): Promise<number> {
  if (num < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}
