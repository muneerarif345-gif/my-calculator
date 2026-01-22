//  alert('Hello world!')


//  465346
//  true

//  "jdfbv"

//  alert('hdbfcsdhb645734657834')

 



//  var fullname = "Ali Ahmed"

//  alert(fullname)

//  fullname = "Asif Ahmed"

//  alert(fullname);

//  var fullname;

//  fullname = "Muhammad Asif"

//  alert(fullname)

 

 

//  var age = 56

//  age = 100

//  alert(age)

//  var oldNumber = 13
//  var newNumber = oldNumber + 4
//  alert(newNumber)

//  var oldNumber = "10"
//  var newNumber = oldNumber + 4
//  alert(newNumber)


// var full_name = "variable 1"
// var fullname$ = "variable 2"
// var fullname12 = "variable 3"
// var fullname = "variable 4"

// var saylani_mass_it_training = "smit"

// var userName = "Jhon" 

// var STUDENT = "Elia"

//  alert(student)
let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
