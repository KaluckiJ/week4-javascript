var buttonClick = function () {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var age = document.getElementById("age").value;

	alert(firstname + " " + lastname + " " + "is" + " " + age +".");

		if (age < 18) {
			alert("You are not old enough to access this site.");
		}

		if (age >= 18) {
			alert("Permisson to this site has been granted!");
		}
}

var reverseSort = function() {
	var familyList = ["Anthony Kalucki", "Mary Jo Kalucki", "Craig Kalucki", "Joe Kalucki", "Mark Kalucki"];
	document.getElementById("familylist").innerHTML = familyList.reverse();
}

