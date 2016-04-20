# String Padding
## Module
### padString
#### Description
```
padString( String targetString, Integer maxLength [, String paddingString [, String paddingType ]] )
```
This function returns a padded `targetString` using the `paddingString` with a specified length of `maxLength`, on either the left, right, or both sides. No action is taken if the length of `targetString` exceeds `maxLength`.

#### Parameters
###### targetString
The input string to operate on.

###### maxLength
A maximum length, not to exceed this value.

###### paddingString
Optional string of one or more characters to use as padding. This value is truncated if it causes the return value's length to exceed `maxLength`. Defaults to a single space character if not specified.

###### paddingType
Optional type of `left` or `both`, specifing how to add the padding. Default value of `right` is invalid, because it is automatically implied.


#### Return value
Returns the padded string.

#### Example
```
var padString = require('./padString.js');

padString('test', 10, '0', 'left'); // 000000test
padString('test', 10, '0', 'both'); // 000test000
padString('test', 10, '0');         // test000000
```

## String prototypes
### padStart
#### Description
```
String.prototype.padStart( Integer maxLength [, String paddingString ] )
```
Attaches to `String.prototype` and wraps `padString`, using `left` as the `paddingType`.

#### Example
```
'test'.padStart(10, '0'); // 000000test
```

### padBoth
#### Description
```
String.prototype.padBoth( Integer maxLength [, String paddingString ] )
```
Attaches to `String.prototype` and wraps `padString`, using `both` as the `paddingType`.

#### Example
```
'test'.padBoth(10, '0'); // 000test000
```

### padEnd
#### Description
```
String.prototype.padEnd( Integer maxLength [, String paddingString ] )
```
Attaches to `String.prototype` and wraps `padString`, with the default `paddingType`.

#### Example
```
'test'.padEnd(10, '0'); // test000000
```

## Additional Information
* [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
* [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)