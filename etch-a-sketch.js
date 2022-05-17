//DOM CACHING//
let div = document.querySelector('.etchContainer');
/*modal*/
const modal = document.querySelector('.modal');
const maodalContent = document.querySelector('.modal-content');
let h4 = document.querySelector('.message');
let input = document.querySelector('.modal-input');
const okButton = document.querySelector('.ok-btn');
const cancelButton = document.querySelector('.cancel-btn');
/*control button*/  
let colorPicker = document.querySelector('#color');
let gridText = document.querySelector('#demo');
let left1 = document.querySelector('#left1');
let left2 = document.querySelector('#left2');
let left3 = document.querySelector('#left3');
let mainControl = document.querySelector('#center-main');
let range = document.querySelector('#range');
const right3 = document.querySelector('#right3');
const right2 = document.querySelector('#right2');
const right1 = document.querySelector('#right1');
/*initialize*/
h4.textContent = 'Please enter a number between 1 and 40.';

//Function to generate random number between 1 to 256
function generateRandomNumber() {
    let randomNum = Math.random();
    let randomNumInt = Math.floor(randomNum*256)+1;
    return randomNumInt;}

//Function to use the random function to generate random colors
function generateRandomColor() {
    return ("rgb("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")");
}