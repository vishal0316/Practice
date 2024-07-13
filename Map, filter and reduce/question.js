const students = [
  { name: "Rohan", marks: 85, subject: "maths" },
  { name: "Sneha", marks: 92, subject: "science" },
  { name: "Amit", marks: 76, subject: "physics" },
  { name: "Priya", marks: 49, subject: "sst" },
];

// UPPER CASE
const names = students.map((e) => {
  return e.name.toUpperCase();
});

// filter
const filter = students.filter((e) => e.marks > 60).map((e) => e.name);

const marks = students.map((e) => {
  if (e.marks < 60) {
    e.marks += 20;
  }
  return e;
});

console.log(marks);
console.log(filter);
console.log(names);
