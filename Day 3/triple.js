var a = '0';
var b;
var c = null;

//console.log(a); // 0 (number)
//console.log(b); // undefined
//console.log(c); // null

//console.log(a + 1); // 01 (string)

//a is the string '0'. Therefore, we expect it to be TRUE, because it's length is more than 0.
//here we check if a is the same as false.
//it should show FALSE, because we expect TRUE = FALSE and it's false
// but, because the string 0 is turned into the number 0, it is basically FALSE = FALSE, which shows true.
console.log('should be false, but is ',a==false);

//in triple === we check the type. since string (or number) are not boolean, it will always check for string/number is boolean
//which will always be false, no matter what.
console.log('should be true on normal, but is of different type, so its always',a===false);

//if we reverse it, we of course get the opposite result (from always false changes to always true)
console.log('should be false, but is  ',!a==false);

//Therefore, it's not correct. The correct evaluation is:
console.log('should be false, and is ',!!a==false); // should be false, and is false
