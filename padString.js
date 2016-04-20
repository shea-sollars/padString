var padString = module.exports = function (targetString, maxLength, paddingString, append) {
	// If string is already at/over the limit
	if (targetString.length >= maxLength) {
		// Just return the string as is
		return targetString;
	};

	if (!paddingString) {
		// Default padding is a space
		paddingString = ' ';
	}
	else {
		// Ensure padding is a String
		paddingString = String(paddingString);
	};

	// If padding already brings us over our limit
	if (paddingString.length + targetString.length >= maxLength) {
		// No need to repeat padding
		var repeatTimes = 1;
	}
	else {
		// Figure out how many chars until we reach the limit
		var repeatTimes = maxLength - targetString.length;
		// Then figure out how many times we need to repeat the padding
		repeatTimes = Math.ceil(repeatTimes / paddingString.length);
	};

	// Make the padding sufficient enough
	paddingString = paddingString.repeat(repeatTimes);

	// Appending...
	if (append) {
		// Just add the padding and cut off the excess
		return (targetString + paddingString).slice(0, maxLength);
	};

	// Figure out if and how much to trim
	var trimAmount = (paddingString.length + targetString.length) - maxLength;

	// Trim if needed and prepend the padding
	return paddingString.slice(0, paddingString.length - trimAmount) + targetString;
};

// padStart polyfill
String.prototype.padStart = function (maxLength, paddingString) {
	return padString(this, maxLength, paddingString);
};

// padEnd polyfill
String.prototype.padEnd = function (maxLength, paddingString) {
	return padString(this, maxLength, paddingString, true);
};
