// does not return an array performs operations on the existing array without mutating
const WomenNames = [
  { name: 'Ekta', age: 20 },
  { name: 'Juliaane', age: 24 },
  { name: 'Disha', age: 24 },
  { name: 'Nina', age: 45 },
  { name: 'Jacqueline', age: 12 },
  { name: 'Deepika', age: 9 },
];

// perform some action for each item in an array
// works like a traditional for loop
WomenNames.forEach((e) => console.log('name', e.name));

WomenNames.forEach((e) => (e.age = 10));

// even if one returns true then it returns true
const hasYoungWomen = WomenNames.some((e) => e.age < 20);
console.log(hasYoungWomen);

// all of them must specify the condition for it to return true
// const allYoungWomen = WomenNames.every((e) => e.age < 30);
// console.log(allYoungWomen);
