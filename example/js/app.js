function onLight(){
    let x = document.getElementById('myImage').src = "https://www.w3schools.com/js/pic_bulbon.gif";
    return x;
}

 function offLight(){
    let y = document.getElementById('myImage').src = "https://www.w3schools.com/js/pic_bulboff.gif";
    return y;
 }

//  Template Strings
 let header = "Hello";
 let tags = ["template literals", "javascript", "es6"];

 let html = `<h2>${header}</h2><ul>`

 for(const x of tags){
     html += `<li>${x}</li>`;
 }
 html+= `</ul>`
 document.getElementById('demo').innerHTML = html;


//  Try Catch Example
function myFunction(){
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
}


// Nested Arrays and Objects
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("demo1").innerHTML = x;

// Object function
// const myObj = {
//   firstName: "John",
//   lastName: "Dou",
//   fullName: function(){
//     return this.firstName +""+ this.lastName;
//   }
// }

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName ;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

let demo2 = document.getElementById("demo2").innerHTML = person.fullName.call(person1);
// let demo2 = document.getElementById("demo2").innerHTML = person.fullName.call(person1, "Oslo", "Norway");
// call() nhận đối số riêng biệt
// apply() nhận đối số dưới dạng array

const persons = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person11 = {
  firstName:"John",
  lastName: "Doe"
}

// let demo2 = document.getElementById("demo2").innerHTML = persons.fullName.apply(person11, ["Oslo", "Norway"]);

// RETURN 1 VALUE MAX IN ARRAY 
const arrEmp = [];
const myArrMax = Math.max.apply("", [1.2,3]);
arrEmp.push(myArrMax);
console.log(arrEmp);
// doi so dau tien khong quan trong(do array k co phuong thuc max)
// CLASS INHERITANCE FOR JAVASCRIPT
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demoInheritance").innerHTML = myCar.show();


// PROMISE EXAMPLE
/*
function newDisplay(some) {
  document.getElementById("pro").innerHTML = some;
}

let myPromise = new Promise(function(resolve, reject) {
  let req = new XMLHttpRequest();
  req.open('GET', "https://www.w3schools.com/js/mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      resolve(req.response);
    } else {
      reject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {newDisplay(value);},
  function(error) {newDisplay(error);}
);

*/
// Async Syntax
function asyMydisplay(some) {
  document.getElementById("as").innerHTML = some;
}

async function myFunctionAsync() {return "Hello";}

myFunctionAsync().then(
  function(value) {asyMydisplay(value);},
  function(error) {asyMydisplay(error);}
);


// Javascript Await
async function newAsy(){
  let promise = new Promise(function(resolve){
      setTimeout(function(){
        resolve("I love you!");
      }, 3000);
  });
  document.getElementById("awa").innerHTML = await promise;
}
newAsy();


// Javascript validation

function validateForm(){
  let x = document.forms["myForm"]["fname"].value;
  if(x == ""){
    alert("Please enter a valid name");
    return false;
  }
}


// DOM ROOT NODE
/*
function getRootNode(){
  let x = document.getElementById("rootNode").innerHTML = document.body.innerHTML;
  return x;
}
function getRootNode(){
  let x = document.getElementById("rootNode").innerHTML = document.documentElement.innerHTML;
  return x;
  console.log(x);
}

getRootNode();
*/

// With example get DOME NODE By document.documentElement -> get all element while onload

// NODE TYPE
document.getElementById("id02").innerHTML = document.nodeType;
// CREATE NEW HTML ELEMENT
let param = document.createElement("p");
let match = document.createTextNode("This is new Param in create HTML DOME JS");
param.appendChild(match);
// document.getElementById("divNode").innerHTML = param.innerHTML;

let div_x = document.getElementById("divNode");
let xx = document.getElementById("p1Node");
div_x.insertBefore(param, xx);


// Window screen 
function newParamScreen(){
  let x = document.getElementById("param_Screen").innerHTML = window.screen.colorDepth;
  return x;
}
newParamScreen();

// JAVASCRIPT PROMPT
function myFunctionPrompt(){
  let txt;
  let prm = prompt("Can you click ok now:", "");
  if(prm == "" || prm == null){
    txt = "User Cancelled the prompt";
  }else{
    txt = "Hello" + prm + "! How are you today";
  }
  document.getElementById("demoPrompt").innerHTML = txt;
}
// myFunctionPrompt();
// COOKIE FOR JAVASCRIPT
/*
function setCookie(cName, cValue, exDate){
    let d = new Date();
    d.setTime = (d.getTime()+ (exDate*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/"; 
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
*/
// Validation FORMS API
function myFunctionValidate() {
    const objVa = document.getElementById("id1Validate");
    if(!objVa.checkValidity()) {
      document.getElementById("demoValidation").innerHTML = objVa.validationMessage;
    }else{
      document.getElementById("demoValidation").innerHTML = "Input Ok";
    }
}


// Destructuring
var courseDes = {
    name : 'Javascript',
    price : 1000,
    image : 'https/static/images/',
    children : {
       name : 'ReactJs',
    }
}
// name : parentName (replace name because courseDes object have 2 parameter
// name is same)
var {name : parentName, children : {name : childName}} = courseDes;
console.log(parentName);
console.log(childName);

// TH WITH SPREAD SAME DESTRUCTURING 
// Bo Dau () va Noi 2 Object or Array lai 
// Example
 var objectSpe = {
   name: 'Javascript',
 };
 var objectSpe2 = {
   price : 1000,
 }
 var objectSpe3 = {...objectSpe, ...objectSpe2};
 console.log(objectSpe3);

//  TAGEGED TEMPLATE LITERALS 
var courseLiterals = function([first,...rest],...values){
  var htmlLiterals = values.reduce(function(acc,currentValue) {
    return [...acc,`<span>${currentValue}</span>`,rest.shift()];
    // shift() xoa di element dau tien cua mang va tra ve phan tu da xoa
  },[first]);
  return htmlLiterals.join('');
};
var brand = 'f8';
var courseLiteral = "Javascript";
var courseLit = courseLiterals`Hoc Lap Trinh  ${courseLiteral} tai ${brand} !`;
console.log(courseLit);

// import {
//   TYPE_LOG,
//   TYPE_ERROR,
//   TYPE_WARN
// } from "./constants.js";

import {
  TYPE_LOG,
  TYPE_ERROR,
  TYPE_WARN
} from "./constants.js";

// import logger from "./logger.js";
import logger from "../logger/index.js";
// import all alias * as constants(name changed return object) from file constants.js
// import * as constants from "./constants.js";
logger('Test message',TYPE_ERROR);