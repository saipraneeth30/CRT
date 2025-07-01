//For loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration: " + i);
}
//While loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}
//Do while
let k = 0;
do {
    console.log("Do-while loop iteration:", k);
    k++;
} while (k < 5);
//for.....of loop
let arr = [1, 2, 'Praneeth', 'sai'];
for (let value of arr) {
    console.log("given list: " + value);
}
//for Each loop
arr.forEach((value, index) => {
    console.log("given list using forEach: " + value + " at index: " + index);
});
