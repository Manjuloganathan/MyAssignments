//even number from 0 to 50
let evennumber=0
for (let evennumber=0; evennumber<=50; evennumber=evennumber+2)//(evennumber+=2)
    {
 console.log(evennumber)

}
let a=5
if(a%2===0)
{
 console.log("Given number is Even number")
}
 else
 {
 console.log("Given number is Odd")
 }

 // to check the positive or negative or zero number

 let b=2

 if(b>0)
 {
 console.log("given number is Positive")
 }
 else if( b<=0)
 { console.log("Given number is Negative")

 }
 else if (b===0)
 {
 console.log("given number is Zero")
 }

// assignment 4:to check the split string and string lenght.

let word ="Learning playwright"

{
 console.log(word.split(""))

console.log(word.length)

}

function splitAndLength(str)
{

let word=str.trim()
let words= word.split(/\s/)
return {words, length: word.length}

}
console.log(splitAndLength("learning playwright"))

// join the two strings
function JoinStrings()
{

let Str1="Test"
let Str2="leaf"
let join =Str1+Str2
{
 console.log(join)
}
}
JoinStrings()
//assignment 3:lunch browser conditional statement
function LaunchBrowser()

{
 let Browser1= "Firefox"
 let Browser2="Edge"

 if(Browser1==="Chrome")
 {
 console.log("Launching Chrome")
 }
else
 {
 console.log("Launching Edge")

}
}
LaunchBrowser()

function runTest(test){
switch(test)
{
 case "Regression":
 console.log("Testing Regression")
 break;

 case"Sanity":
 console.log("Testing Sanity")
 break;
 default:
 console.log("no Testing")

}
console.log(test)
}
runTest("Regression")

// Assignment 5:Plaindrome strings

let char="Manju"

let reverseString = char.split("").reverse().join("")
console.log(reverseString)
if(char===reverseString)
 {
 console.log("The String is Palindraome")

 }
else
{
 console.log(" The String is not Palindromw")

}
