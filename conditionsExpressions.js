//Actividades Conditions and Expressions https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions



//EXERCISE #1
// Write a function to insert a name to the end of the list. Add your own name to the end of the list.
function final (names){
    names = ["Maria", "Antony", "Joy", "Juan", "Julio"];
    console.log(names);
    names.push("Joceline");
    console.log(names);
    };
final();


//2 Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.

function checkName(){
    names = ["Maria", "Antony", "Joy", "Juan", "Abril"];
    console.log(names.includes('Joy'));
}
checkName(); 

//3 Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.

var names = ["Maria", "Antony", "Joy", "Juan", "Abril"];
var names2 = ["Joce", "Joy", "Mau", "Maria", "Abril"];
    
function sameNames (array, array2){
        
        let newArray = [];

        array.forEach((sameNames) => {

            array2.forEach((sameNames2) => {

                if(sameNames == sameNames2)
                {
                    newArray.push(sameNames);
                }
            });
        });
        return newArray;
    }
    console.log(sameNames(names, names2));

//4 Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function


function lengthNames(array){
    let newArray = [];
    array.forEach(element=>{
        newArray.push(element.length);
    });
    return newArray;
}
console.log(lengthNames(names));

//Funcion extra para checar si lo de arriba esta bien
names.forEach((element) => {
    console.log(element, element.length);
});


//EXERCISE #2
//What do the following expressions evaluate to?

console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//EXERCISE #3
//Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.
function numberRange(number){
    number = parseInt(prompt("Ingresa un numero "));
    if(number >= 0 && number <= 25){
        console.log (number + " is between 0 and 25");
    }
    else if(number >= 26 && number <= 100){
        console.log(number + " is between 26 and 100");
    }
    else if(number > 100){
        console.log(number + " is greater than 100");
    }
    else{
        console.log(number + " is less than 0");
    }
}
numberRange();


//What is shown on the console when f is console.log'd?
function what(){
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;
console.log(f);
}
what();