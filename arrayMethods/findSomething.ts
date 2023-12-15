// allows us to find a single object in an array
const someNames = [
  { name: 'Ekta', age: 20 },
  { name: 'Juliaane', age: 24 },
  { name: 'Disha', age: 24 },
  { name: 'Nina', age: 45 },
  { name: 'Jacqueline', age: 12 },
  { name: 'Deepika', age: 9 },
];

// const foreignCrush = someNames.find((e) => e.name === 'Juliaaneeee');
const foreignCrush = someNames.find((e) => e.name === 'Juliaane');
foreignCrush
  ? console.log(foreignCrush)
  : console.log('could not find your crush');
