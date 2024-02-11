//How to accept user input

// 1. Easy Way - window.prompt
// 2. Professional Way - HTML Textbox

/*let username;

username = window.prompt("whats your username?");

console.log(username);*/

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}!`
};

// Math Functions

/* Math
let x = 3.45;
let y = 6;
let [a,b,c,d] = [Math.round(x), Math.ceil(x), Math.pow(x, y), Math.sqrt(x)];

console.log(a,b,c,d); */


/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;


console.log(randomNum); */

const myButton = document.getElementById("generateNum");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function NumGenerator(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = `${randomNum}`;
}; 

// IF Statements Tutorial
// if statement = if a condition is true, execute some code
// if not, do something else.

/* let age = 12;

if(age >= 18){
    console.log("You Are Old Enough To Enter This Site!");
} else {
    console.log("You Must Be 18+ To Enter This Site")
} */

/* let time = 20;

if(time < 12){
    console.log("Goodmorning!")
}
else{
    console.log("Good Afternoon!")
} */

/* let isStudent = true;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are not a student!");
} */

let submitBtn = document.getElementById("ageSubmit");
let result = document.getElementById("ageResult");

submitBtn.onclick = function(){

const age = document.getElementById("myAge").value;
let radioBtn = document.getElementById("radio-btn").checked == true;
const hasLicense = radioBtn;


    
if(age >= 70){
    result.innerHTML = `You are too old to be driving!`;

        if(hasLicense){
            result.innerHTML = `You need to turn in your license!`;
        }
        else{
            result.innerHTML = `Its too late in the game for you buddy!`;
        }
}
else if(age >= 16 && age <=69){

        if(hasLicense){
            result.innerHTML = `You have your license, your all set!`;
        }
        else{
            result.innerHTML = `Yes, but contact your local license angency to schedule an appointment!`;
        }
    
}
else{
    result.innerHTML = `You must be 16+ to have a license`;
}
 
};

//Ternary Statement - basically a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

/* let age = 9;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message); */

let time = new Date();
let greeting = time < 12 ? "Goodmorning!" : "Good Afternoon!";
console.log(greeting);

// fetch = function used for making HTTP request to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in javascript and used
//         for interacting with API's to retrieve and send data
//         asynchronously over the web.
//         fetch(url, {method:"GET/POST/PUT/DELETE"})

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error)); */

    //fetchData();
    
    async function fetchData(){

        try{

            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if(!response.ok){
                throw new Error("Could not fetch resource");
            }

            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";

        }
        catch(error){
            console.error(error);
        }
    }