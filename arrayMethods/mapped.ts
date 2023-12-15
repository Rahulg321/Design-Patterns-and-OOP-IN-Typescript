const crushes = [
  { name: 'Ekta', age: 20 },
  { name: 'Juliaane', age: 24 },
  { name: 'Disha', age: 24 },
  { name: 'Nina', age: 45 },
  { name: 'Jacqueline', age: 12 },
  { name: 'Deepika', age: 9 },
];

// create a new array with the previous array along with some modifications
const twiceAge = crushes.map((e) => 2 * e.age);
console.log(twiceAge);
