// 1. write a program that check the number is positive, nagetive and zero

// userInput = +prompt("enter your number");

// if (userInput > 0) {
//   console.log("your number is positive");
// } else if (userInput == 0) {
//   console.log("your number is equal to zero");
// }else{
//     console.log("your number is nagetive");
// }

// 2. write a program that give the input from the user and tell
//    that the user are senior citizen, adult and minor age.

// userInput = +prompt("enter your number");

// if (userInput >= 50) {
//   console.log("your are a senior citizen");
// } else if (userInput >= 18 && userInput <= 49) {
//   console.log("your are a adult man");
// }else{
//     console.log("your are a minor age");
// }

// 3. Write a program that checks if a given year is a leap year.

// userInput = +prompt("enter your number");

// if ((userInput % 4 == 0 ) || (userInput % 100 == 0) || (userInput % 400 == 0)) {
//   alert ("this year is a leap year")
// }
// else{
//   alert("this year is not a leap year")
// }

// 4. Take an integer and check if it’s even or odd.

// userInput = +prompt("enter your number");

// if (userInput % 2 == 0 ){
//   console.log("this number is even");
// }
// else{
//   console.log("this number is odd");
// }

// 5. Ask the user for a grade percentage and display the corresponding letter grade (A, B, C, D, F).

// grade = +prompt("enter your number");

// if (grade >= 90) {
//   console.log("your grade is A+");
// } else if (grade >= 80 && grade < 89) {
//   console.log("your grade is A");
// } else if (grade >= 70 && grade < 79) {
//   console.log("your grade is B");
// } else if (grade >= 60 && grade < 69) {
//   console.log("your grade is C");
// } else if (grade >= 50 && grade < 59) {
//   console.log("your grade is D");
// } else if (grade >= 40 && grade < 49) {
//   console.log("your grade is E");
// } else {
//   console.log("Congratulation! your are fail");
// }

// 8. Create a program that checks if a given string is a palindrome.

// let str = prompt("enter your word");
// isPalindrome = true;

// for (let i = 0; i < Math.floor(str.length / 2); i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("this word is palindrome");
// }else{
//   console.log("this word is not palindrome");
// }

// 9. Take three sides of a triangle as input and check if they form a valid triangle

let side1 = +prompt("enter your side1 length : ");
let side2 = +prompt("enter your side2 length : ");
let side3 = +prompt("enter your side3 length : ");

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side1 > side1) {
  print("this triangle is valid form");
} else {
  print("this triangle is not valid form");
}