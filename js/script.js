// MAIN VARIABLES
var firstname = "Joe";
var lastname = "Kalucki";
var age = 28;
var futureAge = age + 22
var family = ["Anthony", "Mary Jo", "Craig", "Joe", "Mark"];

// On Page load
var formLoad= function () {
	document.getElementById("firstname").value = firstname;
	document.getElementById("lastname").value = lastname;
	document.getElementById("age").value = age;
	document.getElementById("future-age").value = futureAge;
	document.getElementById("family").value = family;
}

// Button click function
var clickEvent= function () {
	alert(firstname + " " + lastname + " " + "is" + " " + age +" years old.");
}





