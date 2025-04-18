console.log("20 - Operators in js.")

/*

Operators
Arithmetic Operators
+				Addition
-				Subtraction
*				Multiplication
**				Exponentiation (same result as Math.pow(x,y))
/				Division
%				Modulus (Division Remainder)
++				Increment
--				Decrement

Assignment Operators
Operator			Example			Same As
=				x = y				x = y
+=				x += y			x = x + y
-=				x -= y				x = x - y
*=				x *= y			x = x * y
/=				x /= y				x = x / y
%=				x %= y			x = x % y
**=				x **= y			x = x ** y
&&=				x &&= y			x && (x = y)
||=				x ||= y			x || (x = y)
??=				x ??= y			x ?? (x = y)

String Operators
+				concatenate strings with strings/numbers/boolean, etc.

Comparison Operators
==				equal to
===				equal value and equal type
!=				not equal
!==				not equal value or not equal type
>				greater than
<				less than
>=				greater than or equal to
<=				less than or equal to
?:				ternary operator
??				nullish coalescing operator

Logical Operators
&&				logical and
||				logical or
!				logical not

Type Operators
typeof				Returns the type of a variable
instanceof			Returns true if an object is an instance of an object type

Bitwise Operators
Operator	Description		Example	Same as		Result		Decimal
&		AND			5 & 1		0101 & 0001	0001	 	1
|		OR			5 | 1		0101 | 0001		0101		5
~		NOT			~ 5		~0101		1010		10
^		XOR			5 ^ 1		0101 ^ 0001	0100		4
<<		Zero fill left shift	5 << 1	0101 << 1		1010		10
>>		Signed right shift	5 >> 1	0101 >> 1		0010		2
>>>		Zero fill right shift	5 >>> 1	0101 >>> 1		0010		2

*/

// Nullish coalescing operator ?? (returns first defined value)
// let height = 0;
// console.log(height || 100); // 100
// console.log(height ?? 100); // 0


// let x = 1 && 2 ?? 3; // Syntax error :: Uncaught SyntaxError: Unexpected token '??'
// Use explicit parentheses to work around it:
// let x = (1 && 2) ?? 3; // Works
// console.log(x); // 2

// let a = null;
// console.log(typeof a);

/*

⭐ TypeOf

typeof operator returns the type of a variable or an expression in a string format. 

Types:

typeof operator can return one of these primitive types:
string for strings.
number for numbers.
boolean for true/false.
undefined for undefined

typeof operator can return one of two complex types:
function for functions.
object for objects, arrays, and null.

typeof ""				// Returns "string"
typeof (3)				// Returns "number"
typeof +				// Returns "error". Operators have no data type
typeof true				// Returns "boolean"
typeof [1, 2, 3, 4]			// Returns "object"
typeof function myFunc(){}	// Returns "function"
typeof {name:'John', age:34}	// Returns "object"
var car;    				// Value is undefined, type is undefined
car = undefined;			// Value is undefined, type is undefined
person = null;			// Now value is null, hence the type is object

Note: undefined and null are equal in value but different in type.

*/

/*

⭐InstanceOf
instanceof operator returns true if the specified object is an instance of the specified object. 
It tests the presence of constructor.prototype in object's prototype chain. 

Ex.
var cars = ["Saab", "Volvo", "BMW"];
cars instanceof Array;          // Returns true
cars instanceof Object;        // Returns true
cars instanceof String;         // Returns false
cars instanceof Number;      // Returns false

*/