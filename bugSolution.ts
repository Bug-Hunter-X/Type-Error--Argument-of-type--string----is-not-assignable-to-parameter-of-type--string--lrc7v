function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate through the array
for (const name of user) {
  console.log(greeter(name)); // Correct: Pass each string individually
}

// Solution 2: Modify the function signature to handle arrays
function greeterArray(people: string[]): string[] {
  return people.map(person => `Hello, ${person}!`);
}

console.log(greeterArray(user)); // Correct: Function now accepts an array