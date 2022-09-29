// var number = 0;
// var firstName = "Seun";

// var boolen = true;
// var object = {
//   name: firstName,
//   lastname: "ope",
//   age: 18,
//   clickMe: () => {},
// };
// var array = ["bread", "butter"];

// var firstName = Tolu;
// var nullSample = null;

// let age;

// age = 18;

// age = 20;
// console.log(age, "AGE");

// const list = ["value"];
// alert('oyinkansola')

// const age = prompt("Enter your age");
// // console.log(age);

// document.querySelector("age").innerHTML = age;

// var firstName = prompt("Enter your name");
// document.querySelector("#firstName").innerHTML = firstName;

// const age = prompt("Enter your age");
// console.log(document.querySelector(".age"), ":::QUERY:::");
// console.log(document.getElementsByClassName("age"), ":::CLASS:::");

// document.getElementsByClassName("age")[0].innerHTML = age;

// const array = ['David', 'Bolu', 'Bode']
// console.log(array[1], ':::ARRAY:::')

function toggleHander() {
  const toggleElement = document.getElementById("contact");
  if (toggleElement.style.width === "100px") {
    toggleElement.style.width = "50px";
    return;
  } else {
    toggleElement.style.width = "100px";
  }
}

// document.getElementsByTagName('li')
// document.getElementsByClassName('header')
// document.getElementsById('firstName')
// document.querySelectorAll('#firstName')

function calculatorHandler(key) {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  console.log(firstNumber, secondNumber, "number");
  // console.log(key);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("smallText").innerHTML = "Please type in a number";
    return;
  }
  if (key === "add") {
    document.getElementById("result").innerHTML = `Result: ${
      Number(firstNumber) + Number(secondNumber)
    } `;
  } else if (key === "subtract") {
    document.getElementById("result").innerHTML = `Result: ${
      Number(firstNumber) - Number(secondNumber)
    } `;
  } else if (key === "multiply") {
    document.getElementById("result").innerHTML = `Result: ${
      Number(firstNumber) * Number(secondNumber)
    } `;
  } else if (key === "divide") {
    document.getElementById("result").innerHTML = `Result: ${
      Number(firstNumber) / Number(secondNumber)
    } `;
  } else {
    document.getElementById("result").innerHTML = `Result: ${
      Number(firstNumber) % Number(secondNumber)
    } `;
  }
}

let myMarketList = ["Butter", "Sugar", "Milk", "Custard", "Oat"];
// console.log(myMarketList.length, 'ARRAY LENGTH')

function arrayHandler() {
  document.getElementById("myUl").innerHTML = "";
  for (let i = 0; i < myMarketList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = myMarketList[i];
    document.getElementById("myUl").appendChild(li);
  }
}
function addMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.push(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}
function removeMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.pop(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}
function shiftMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.pop(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}
function unshiftMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.unshift(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}

const resp = async () => {
  const menu = await fetch("https://reqres.in/api/users?page=2", {
    method: "Get",
  });
  const data = await menu.json();
  // console.log(data, 'Menu');
  const resp = data.data;
  console.log(resp, "MENU");
  // document.getElementById('menu').
  var HTML = "<table border=1 width=100%> ";
  for (let i = 0; i < resp.length; i++) {
    // let li = document.createElement("li");
    // li.innerHTML = resp[i].avatar;
    // li.innerHTML = resp[i].email;
    // li.innerHTML = resp[i].first_name;
    // li.innerHTML = resp[i].last_name;
    // li.innerHTML = resp[i].id;es
    // document.getElementById('resp').appendChild(li);
    HTML += "<tr>";

    HTML += "<td align=center>" + resp[i].id + "</td>";

    HTML += '<td align=center> <img src=" ' + resp[i].avatar + '" /> </td>';

    HTML += "<td align=center>" + resp[i].email + "</td>";
    HTML += "<td align=center>" + resp[i].first_name + "</td>";
    HTML += "<td align=center>" + resp[i].last_name + "</td>";
    HTML += "</tr>";
  }
  HTML += "</table>";
  document.getElementById("resp").innerHTML = HTML;
};
