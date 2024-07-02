
// Assignment 1

let array1 = [1, 2, 3, 4, 5];
array1.splice(0, 2); // Remove the first two elements
array1.push(6, 7, 8); // Add three new elements to the end

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
// }
// Assignment 2

let array2 = [1, 2, 3, 4, 5];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(i);
    }
}
// Assignment 3

let array3 = [3, 4, 5];
array3.unshift(1, 2); // Add two new elements to the beginning
array3.pop(); // Remove the last element

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}
// Assignment 4

let array4 = [1, 2, 3, 4, 5];

for (let i = 1; i < array4.length; i++) {
    if (array4[i] > array4[i - 1]) {
        console.log(array4[i]);
    }
}
// Assignment 5

let array5 = [1, 2, 3, 4, 5];
let index = array5.indexOf(3); // Find the index of the element 3
array5.splice(index); // Remove all elements starting from that index

for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
}