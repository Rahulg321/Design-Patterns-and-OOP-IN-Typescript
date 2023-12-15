// reduce => reducing to a single value

const personNames = [
  { name: 'Ekta', age: 20 },
  { name: 'Juliaane', age: 24 },
  { name: 'Disha', age: 24 },
  { name: 'Nina', age: 45 },
  { name: 'Jacqueline', age: 12 },
  { name: 'Deepika', age: 9 },
];

const totalAge = personNames.reduce((currentValue, person) => {
  return currentValue + person.age;
}, 0);

console.log(totalAge);

// includes function checks if a value exists in an array of primivites

const nums = [1, 2, 3, 45, 5, 56, 3];
console.log(nums.includes(3));
console.log(nums.includes(39));
