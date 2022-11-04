function rentPrice(days) {

	if (days > 3 && days <= 7) {
		return days * 25 - (days - 3) * 5;
	} else if (days > 7) {
		return days * 25 - ((days - 7) * 10 + 20);
	} else {
		return days * 25;
	}
}

module.exports = rentPrice;