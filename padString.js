var padString = module.exports = function (targetString, maxLength, paddingString, paddingType) {
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

	// Figure out how much to trim if any
	var trimAmount = (paddingString.length + targetString.length) - maxLength;

	// Might aswell just trim it now
	paddingString = paddingString.slice(0, paddingString.length - trimAmount);

	if (paddingType) {
		// Typecast
		paddingType = String(paddingType);
		// Diversify our paddingType option a little bit
		paddingType = paddingType.toLowerCase();
	};

	// Center the targetString
	if (paddingType == 'both') {
		// Half of our padding string
		var paddingLength = Math.floor(paddingString.length / 2);
		// The left side
		var leftPadding = paddingString.slice(0, paddingLength);
		// Right side gets the odd man out 
		var rightPadding = paddingString.slice(paddingLength);
		// Cut/paste/return
		return leftPadding + targetString + rightPadding;
	}
	else if (paddingType == 'left') {
		// Prepend the padding
		return paddingString + targetString;
	};

	// Append the padding (default)
	return targetString + paddingString;
};

// padStart polyfill
String.prototype.padStart = function (maxLength, paddingString) {
	return padString(this, maxLength, paddingString, 'left');
};

// padBoth
String.prototype.padBoth = function (maxLength, paddingString) {
	return padString(this, maxLength, paddingString, 'both');
};

// padEnd polyfill
String.prototype.padEnd = function (maxLength, paddingString) {
	return padString(this, maxLength, paddingString);
};
