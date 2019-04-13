// Define variables
let arr = [1, 2, 3];
let obj = {
  name: "Yura",
  details: {
    age: 25,
    city: "Lviv"
  }
};

// Destruct array
let [low, mid, high] = arr;
console.log(low, mid, high);

// Destruct object
let {
  name: nm,
  details: { age, city }
} = obj;
console.log(nm, age, city);

// Spread array
let [low, ...rest] = arr;
console.log(low, rest);

// Spread object
let { name, ...rest } = obj;
console.log(rest);
