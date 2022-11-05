function rentPrice(days) {
	const allPrice = days * 25;

	if (days > 3 && days <= 7) {
		return allPrice - (days - 3) * 5;
	} else if (days > 7) {
		return allPrice - ((days - 7) * 10 + 20);
	}
	return allPrice;
}

module.exports = rentPrice;