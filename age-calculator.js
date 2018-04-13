async function calculateAge (birthDate, otherDate) {
	birthDate = new Date(birthDate);
	otherDate = new Date(otherDate);
	
	let years = (otherDate.getFullYear() - birthDate.getFullYear());
	
	if (otherDate.getMonth() < birthDate.getMonth() ||
			otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
	
		years--;
	}
	
	return years;
}

const age = calculateAge("10/12/1979", "12/04/2018"); // Format: MM/DD/YYYY
console.log(age);


