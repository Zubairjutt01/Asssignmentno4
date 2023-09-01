"use strict";
document.body.style.backgroundColor = 'pink';
/*Question 1st*/
//programm to add first n even numbers
let sum = 0;
const sumEvens = (n) => {
    for (let index = 1; index <= n; index++) {
        sum = sum + (2 * index);
    }
    return sum;
};
const sum1 = sumEvens(4);
console.log(sum1); // 30
//
/*Question 2nd*/
//program to print even numbers from an array
function printEvenNums(a) {
    if (a.length <= 0) {
        return;
    }
    else {
        for (let index = 0; index < a.length; index++) {
            if (a[index] % 2 === 0) {
                console.log(a[index] + ' is an even number');
            }
        }
    }
}
printEvenNums([2, 3, 4, 5, 6, 3, 1, 6]);
//
/*Question 3rd*/
//Program to remove all even numbers from array
function printoddNums(a) {
    if (a.length <= 0) {
        return;
    }
    else {
        for (let index = 0; index < a.length; index++) {
            if (a[index] % 2 === 0) {
                a.splice(index, 1);
                index--;
            }
        }
    }
    console.log(a);
}
printoddNums([2, 3, 2, 6, 5, 4, 5, 6, 3, 1, 6]);
//
/*Question 4th*/
//Function to calculate area of a circle
//
const area = (rad) => {
    return Math.PI * rad * rad;
};
console.log(area(3));
//
/*Question 5th*/
/*
80 to 100 = A
70 to 80 = B
60 to 70 = C
50 to 60 = D
40 to 50 = E
30 to 40 = F
*/
// Function to remove grades less than 50
function removeGrades(a) {
    if (a.length <= 0) {
        return;
    }
    else {
        for (let index = 0; index < a.length; index++) {
            if (a[index] === 'F' || a[index] === 'E') {
                a.splice(index, 1);
                index--;
            }
        }
    }
    console.log(a);
}
removeGrades(['A', 'F', 'D', 'E', 'F', 'B']); //but how can i remove grades based on marks conditions 
//
/*Question 6th*/
//Function to find largest number from array
let max = 0;
function findMax(a) {
    if (a.length <= 0) {
        return;
    }
    else {
        for (let index = 0; index < a.length; index++) {
            if (a[index] > max) {
                max = a[index];
            }
        }
    }
    console.log(max + ' is a largest number in array');
}
findMax([2, 3, 2, 6, 5, 4, 5, 6, 3, 1, 6]);
//
