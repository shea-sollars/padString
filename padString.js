var padString = module.exports = function (targetString, length, padding, append) {
	// If string is already at/over the limit
	if (targetString.length >= length) {
		// Just return the string as is
		return targetString;
	};

	if (!padding) {
		// Default padding is a space
		padding = ' ';
	}
	else {
		// Ensure padding is a String
		padding = String(padding);
	};

	// If padding already brings us over our limit
	if (padding.length + targetString.length >= length) {
		// No need to repeat padding
		var repeatTimes = 1;
	}
	else {
		// Figure out how many chars until we reach the limit
		var repeatTimes = length - targetString.length;
		// Then figure out how many times we need to repeat the padding
		repeatTimes = Math.ceil(repeatTimes / padding.length);
	};

	// Make the padding sufficient enough
	padding = padding.repeat(repeatTimes);

	// Appending...
	if (append) {
		// Just add the padding and cut off the excess
		return (targetString + padding).slice(0, length);
	};

	// Figure out if and how much to trim
	var trimAmount = (padding.length + targetString.length) - length;

	// Trim if needed and prepend the padding
	return padding.slice(0, padding.length - trimAmount) + targetString;
};

// padStart polyfill
String.prototype.padStart = function (length, padding) {
	return padString(this, length, padding);
};

// padEnd polyfill
String.prototype.padEnd = function (length, padding) {
	return padString(this, length, padding, true);
};
