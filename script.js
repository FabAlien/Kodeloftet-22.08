function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

/*
const fruitBowl = ["Orange", "Banana", "Apple", "Kiwi", "Peach"];
console.log(fruitBowl);
console.log(fruitBowl.toString());

// .push() legger til et element på slutten av en array
fruitBowl.push("Mango");
console.log(fruitBowl);

// .unshift() legger til et element på starten av en array
fruitBowl.unshift("Pineapple");
console.log(fruitBowl);

// .pop() fjerner det siste elementet av en array
fruitBowl.pop();
fruitBowl.pop();
console.log(fruitBowl);

// .shift() fjerner det første elementet av en array
fruitBowl.shift();
console.log(fruitBowl);
*/

// function createFruitBowl() {
//   const inputFruit = document.querySelector("#inputFruit").value;
//   console.log(inputFruit);

//   const fruitBowl = [];

//   if (action === "fruitPush") {
//     fruitBowl.push()
//   } else {
//     console.log("Something went wrong!")
//   }
// }


  const fruitPush = document.querySelector("#fruitPush");
  const fruitPop = document.querySelector("#fruitPop");
  const fruitUnshift = document.querySelector("#fruitUnshift");
  const fruitShift = document.querySelector("#fruitShift");

  const fruitBowl = [];

  fruitPush.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.push(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
  });

  fruitPop.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.pop(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
  });

  fruitUnshift.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.unshift(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
  });

  fruitShift.addEventListener("click", function () {
    let inputFruit = document.querySelector("#inputFruit");
    fruitBowl.shift(inputFruit.value);

    let fruitDisplay = document.querySelector("#fruitDisplay");
    fruitDisplay.textContent = fruitBowl;

    inputFruit.value = "";
  });
