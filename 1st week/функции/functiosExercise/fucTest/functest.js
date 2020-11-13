function calculateTips(sum) {
	if (sum <= 1000) {
		tip = sum * 0.2
	} else if (sum > 1000 && sum <= 3000) {
		tip = sum * 0.15
	} else {
		tip = sum * 0.1
	}
	console.log(`If check sum are ${sum}, tips are ${tip}`);
}

var tip;
calculateTips(1000);
calculateTips(2000);
calculateTips(5000);