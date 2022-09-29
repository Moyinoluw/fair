// Operators

// Assignment Operators
var a = 18;
var b = 4;
var c = 3;
let d = "Corn";
d += "Flakes";
const e = (5, 7, 9);

// Arithmetic Operators
console.log(a + b, "Addition");
console.log(a - b, "Subraction");
console.log(b * c, "Multiplaction");
console.log(a / b, "Division");
console.log(b % c, "Remainder");
console.log(c++, "Increment");
console.log(--a, "Decrement");
console.log(c ** a, "Exponentiation");

// Comparison Operators
console.log(c > a, "greater than");
console.log(b < a, "less than");
console.log(b == b, "Equal to");
console.log(c != b, "Not Equal to");
console.log(a === "WEll", "Strict Equal to");
console.log(b !== b, "Strict Not Equal to");
console.log(a >= 2, "Greater Than or Equal to");
console.log(b <= c, "Less Than or Equal to");

// Logical Operators
console.log(a < 5 && c > 1, "Logical AND");
console.log(b >= a || c != 1, "Logical OR");
console.log(!(b ** c < 20), "Logical NOT");

// String operators
console.log("Pop" + "corn");
console.log(d);
console.log(e);

// document.querySelectorAll("button").addEventListener("Sign In", function () {
//   document.querySelector("bg-modal").style.display = "flex";
// });

// document.querySelector(".close").addEventListener("Sign In", function () {
//   document.querySelector("bg-modal").style.display = "none";
// });
// document.getElementById("form")[0];

function calculatorHandler(key) {
  const firstNumber = document.getElementById("firstnumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
//   console.log(firstNumber, secondNumber, "display the number");
//   console.log(key);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("smallText").innerHTML = "Please type in a number";
    return;
  }
  if (key === "multiply") {
    document.getElementById("result").innerHTML = firstNumber * secondNumber;
  } else {
    document.getElementById("result").innerHTML = firstNumber / secondNumber;
  }
}
