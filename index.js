console.log("Hello World");
//Comments in JavaScript Code
    //in-line comment
    /*
        This is a 
        multi-line
         comment
    */

/** Data-types and Variables :
     * undefined
     * null
     * boolean
     * string
     * symbol
     * number
     * object
 **/    

 /***
  * 3 ways to declare variables:
  *  1.var
  *  2. let
  * 3.const
  */

 var myName = "Rucha";  //You can var anywhere in the program

 console.log(myName);
 myName = "Ruchu";
 console.log(myName);

 let yourName="user"; //You can use let only where it is declared.
                    // i.e within the scope

 
 const pi = 3.14;  //const is constant. You can never change its value. 
   //The name is contradictory because it does not vary once it is declared.

//Declaring Variables:
    var a ;
    console.log(a); // a is not defined

 
//Declaring and Assigning Variables:
    var b=2;        


 //Assigning a
    a=3;
//Assigning b value of a
    b=a;

// console.log(content) allows us to see content in console
     console.log(a);

//Declaring and Initializing c in the same line
    var c = "I am a ";

//"=" is assignment operator to initialize and assign values

a=a+1;
b=b+2;
c= c + "string.";

console.log(a);
console.log(b);
console.log(c);


//Variable names and Function names in JS are case-sensitive

var bankAccountNumber;
var studentRollNumber;

//Camel Case Naming Convention is used.


//Adding two numbers

var sum = a + b;
console.log(a);
console.log(b);
console.log(sum);

//Subtraction

var sub = b-a;
console.log(b);
console.log(a);
console.log(sub);

//Multiplication in JS is done using '*' symbol

var product = a*b;
console.log(b);
console.log(a);
console.log(product);

//Division in JS is done using '/' symbol

var quotient = b/a;
console.log(b);
console.log(a);
console.log(quotient);


//Incrementing Numbers

var num =100;
console.log(num);
num++;
console.log(num);


//Decrementing Numbers

var num1 = 200;
console.log(num1);
num1--;
console.log(num1--);


//Decimal Numbers or Floating Numbers or Floats

var decimalNumber = 1.5;
console.log(decimalNumber);

var myDecimalNumber = 0.009;
console.log(myDecimalNumber);


//Multiply Decimals

var productOfTwoDecimalNumbers = 1.5 * 0.12;
var content = "1.5 * 0.12";
console.log(content);
console.log(productOfTwoDecimalNumbers);


//Divide Decimals

var quotientValue = 1.5/0.3;
console.log("1.5 /0.3");
console.log(quotientValue);


//Calculating Remainder using % (MOD)  OPERATOR

var remainder = 11%3;
console.log("11%3");
console.log(remainder);

var rem = 3%2;
console.log("3%2");
console.log(rem);
var rem1 = 3.2%1.6;
console.log("3.2%1.6");
console.log(rem1);

/*MOD OPERATOR CAN BE USED TO  FIND WHETHER A NUMBER IS ODD OR EVEN
  var number = 10;
  var rem2= number%2;
  if the  value of rem2 is 0 then number is even else it is odd
*/

//Compound Assignment using Augmented Addition
console.log(" Compound Assignment using Augmented Addition");

var x =100;
console.log(x);
console.log("100+=50")
x+=50;
console.log(x);

var y = 1.8;
console.log(y);
console.log("1.8+=0.1")
y+=0.1;
console.log(y);

var z= 9;
console.log(z);
console.log("9+=1")
z+=1;
console.log(z);


//Compound Assignment using Augmented Subtraction
console.log(" Compound Assignment using Augmented Subtraction");

var m = 180;
console.log(m);
console.log("180-=20")
m-=20;
console.log(m);


var n =0.9;
console.log(n);
console.log("0.9-=0.2")
n-=0.2;
console.log(n);

var o = 2;
console.log(o);
console.log("2-=1")
o-=1;
console.log(o);


//Compound Assignment using Augmented Multiplication
console.log(" Compound Assignment using Augmented Multiplication");


var p = 29;
console.log(p);
console.log("29*=3")
p*=3;
console.log(p);


var q =0.9;
console.log(n);
console.log("0.9*=0.2")
q*=0.2;
console.log(q);

var r = 100;
console.log(r);
console.log("100*=10")
r*=10;
console.log(r);




//Compound Assignment using Augmented Division
console.log(" Compound Assignment using Augmented Division");


var g = 150;
console.log(g);
console.log("150/=50")
g/=50;
console.log(g);


var h =0.9;
console.log(h);
console.log("0.9/=3")
h/=3;
console.log(h);



// Declaring String Variables [How we declared c ?]

var query = "What is your name?"
var answer = 'My name is Rucha.'

// A string can be declared using double quotes or single quotes

//Escaping Literal Quotes in Strings

var myString = "This is a \' Single Quoted String\'";
console.log(myString);

var yourString = "This is a \" Double Quoted String\"";
console.log(yourString);


//What if you don't want to use backward slash ((Escape Characters)) for displaying quotes ???
var theString = '<img src="img/pic001.png"  alt ="picture of a husky" width="50%">'
console.log(theString);


var backslashString="\\backslash\\";
console.log(backslashString);

var newLineString='rucha\nnimbalkar';
console.log(newLineString);

var backspaceStr="rucha\b";
console.log(backspaceStr);

var formString = "name\f";
console.log(formString);


var tabString="rucha\tnimbalkar";
console.log(tabString);


var myStr="First Line\nNew Line\ttab"
console.log(myStr);

//Concatenating Strings with Plus Operator

var myConcatenatedStr = myStr + backslashString;
console.log(myConcatenatedStr);