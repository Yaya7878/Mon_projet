//console.log('hello world!');

//Les variables

/*let userAge = 17;

console.log(userAge);

userAge = 25;

console.log(userAge);

userAge = 'Olivier';

console.log(userAge);

//Les opérations mathématiques +, -, *, /, %

let nombre1 = 14;
let nombre2 = 3;

console.log(nombre1 + nombre2);
console.log(nombre1 - nombre2);
console.log(nombre1 * nombre2);
console.log(nombre1 / nombre2);

console.log(nombre1 % nombre2);

// + -> les texte concaténations

let nom = "Bear";
let prenom = "Mister";

console.log("Bonjour "+prenom +" "+nom);
console.log(`Bonjour ${prenom} ${nom}`)

//auto modification

let captainAge = 35;

captainAge = captainAge -3;

console.log(captainAge);

captainAge /= 10;

console.log(captainAge);

//incrémentation (++) - décrémentation (--)

let counter = 0;

console.log(counter)

counter++;

console.log(counter)

counter++;

console.log(counter)

counter++;

*/

//Les conditions

/*
let userAge = 19;
let hairColor = "brun"

if (userAge < 18)

{
    console.log("Tu dégages!");
} 
else if (hairColor === "brun")
{
    console.log("Tu prends le large");
}
else
{
    console.log("Bienvenue");
}
*/
//

alert("Salut utilisateur");

let userName = prompt("Quel est ton nom");


alert(`Bonjour ${userName}`);

let userAge = prompt("Quel est votre âge ?");

if(userAge>= 18)
    {
        alert("Tu es majeur");
    }
    else
    {
        alert("Tu es mineur")
    }