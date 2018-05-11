var myOper = "global";
var myOper1 = "global";
var firstTime = "global";
var firstNumber = "global";
var secondNumber = "global";
firstNumber = 0;
firstTime = false;


function numFunction(myVal) {
	var scrValue = document.getElementById("scrField").innerText;
	// scrValue = num.toString(scrValue);
	if (isNaN(myVal)) {
		myOper = myVal;
		if (myOper === "equal") {
			secondNumber = document.getElementById("scrField").innerText;
			calcMyNumbers(secondNumber, myOper1);
		} else if (myOper === "clear") {
			document.getElementById("scrField").innerText = 0;
			firstTime = false;
		} else {
		myOper1 = myVal;
		firstNumber = document.getElementById("scrField").innerText;
		document.getElementById("scrField").innerText = 0;
		firstTime = false;
		}
	} else {
		if (firstTime === false) {
			document.getElementById("scrField").innerText = myVal;
			firstTime = true;
		} else {
			scrValue = document.getElementById("scrField").innerText;
			document.getElementById("scrField").innerText = scrValue + myVal
		}
	}
}

function calcMyNumbers(secondNumber, myOper1) {
	if (myOper1 === "add") {
		document.getElementById("scrField").innerText = parseInt(firstNumber) + parseInt(secondNumber);
		firstTime = false;
	} else if (myOper1 === "subtract") {
		document.getElementById("scrField").innerText = parseInt(firstNumber) - parseInt(secondNumber);
		firstTime = false;
	} else if (myOper1 === "multiply") {
		document.getElementById("scrField").innerText = parseInt(firstNumber) * parseInt(secondNumber);
		firstTime = false;
	} else if (myOper1 === "divide") {
		document.getElementById("scrField").innerText = parseInt(firstNumber) / parseInt(secondNumber);
		firstTime = false;
	}
}
	