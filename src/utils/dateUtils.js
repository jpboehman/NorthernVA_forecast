// Function to get the dates between a beginning and end date
export const getDaysArray = (start, end) => {
	const arr = [];
	// Loop to get the days between the two entered dates
	for (let dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
		arr.push(new Date(dt));
	}

	// Converting the date format to locale
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].toLocaleDateString();
	}
	return arr;
};

// Function to place 0's in front of single digit days / months
export const convertToFormat = (dateArr) => {
	for (let i = 0; i < dateArr.length; i++) {
		let currentDate = new Date(dateArr[i]);
		let dd = currentDate.getDate();
		let mm = currentDate.getMonth() + 1;
		let yyyy = currentDate.getFullYear();

		if (dd < 10) {
			dd = '0'.concat(dd);
		}
		if (mm < 10) {
			mm = '0'.concat(mm);
		}
		dateArr[i] = mm + '/' + dd + '/' + yyyy;
	}
	return dateArr;
};
