// MAP

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.map((e, i) => {
  return e * 2 + 1;
});

console.log(newArray);

// filter

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray1 = array1.filter((e) => {
  return e >= 4;
});

console.log(newArray1);

// reduce

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray2 = array2.reduce((acc, val) => {
  return acc + val;
});

console.log(newArray2);
