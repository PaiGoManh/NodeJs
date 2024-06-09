const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };
  
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }

  const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
  