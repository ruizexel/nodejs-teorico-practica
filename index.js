/**
 *let username= "Santiago";
let age = 20;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
    name : 'ryan',
    lastname : "ray"
};

const PI = 3.1416;

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);*/

/*let age = 10;

if(age >= 18){
    console.log("You are an adult");
}else if(age >= 13){
    console.log("You are an ateenager");
}else{
    console.log("You are a child");
}*/

// const names = ['joe', 'john', 'marco'];

// for(let name of names){
//     console.log(`Name is ${name}`);
// }


const showUserInfo = (userName, userAge) => `The username is ${userName}, the user is ${userAge} years old`;

console.log(showUserInfo("Santiago", 20));
console.log(showUserInfo("Daniela", 30));