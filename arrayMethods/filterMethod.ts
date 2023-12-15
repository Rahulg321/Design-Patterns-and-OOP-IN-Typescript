const persons = [
  { name: 'Ekta', age: 20 },
  { name: 'Juliaane', age: 24 },
  { name: 'Disha', age: 24 },
  { name: 'Nina', age: 45 },
  { name: 'Jacqueline', age: 12 },
  { name: 'Deepika', age: 9 },
];

// filter out a new array from an existing array based on some condition or callback function

// get all women whose age is less than 20
const filterWomen = persons.filter((person) => person.age < 20);
// get all women whose age is greater than 20
const greater = persons.filter((person) => person.age > 20);
// get all women whose age is equal to 20
const equal = persons.filter((person) => person.age === 24);

// console.log(filterWomen);
console.log(greater);
console.log(equal);
