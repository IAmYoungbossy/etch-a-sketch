//DOM CACHING//
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
h4.textContent = 'Please enter a number between 1 and 100.';

//Function to generate random number between 1 to 256
function generateRandomNumber() {
    let randomNum = Math.random();
    let randomNumInt = Math.floor(randomNum*256)+1;
    return randomNumInt;}

//Function to use the random function to generate random colors
function generateRandomColor() {
    return ("rgb("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")");
}

//Function to create divs for etching
function createInnerDivs(pixel) {
    //Initializing variables
    const WidthAndHieght = 350;//Width and height of etch container
    const pixelSquare = (WidthAndHieght/pixel)+'px';
    const totalPixels = pixel*pixel;

    //'For' loop to create x number of divs
    for (let i = 1; i <= totalPixels; i++) {

        //Caching DOM to JS variables
        let innerD = document.createElement('div');
        innerD.classList.add('innerDivs');
        const div = document.querySelector('.etchContainer');
        div.appendChild(innerD);

        //CSS styling of divs
        innerD.style.backgroundColor = '#CBCFC2';
        innerD.style.height = pixelSquare;
        innerD.style.width = pixelSquare;
        innerD.style.margin = '0px';
        innerD.style.border = '1px dotted rgba(179,179,179,1)';
        innerD.style.boxSizing = 'border-box';

        //Function to call random colors
        function getRandomRgb() {
            return (innerD.addEventListener('mouseover', () => {
                innerD.style.backgroundColor = generateRandomColor();
                }));
        }
        
        //Function to clear each pixel
        function erasePixel() {
            innerD.addEventListener('mouseover', () => {
                innerD.style.backgroundColor = '#CBCFC2';
            });
        }

        //Function to clear all pixels
        function clearAll() {
            innerD.style.backgroundColor = '#CBCFC2';
        }

        //Function to call black etching color
        function callBlackBackground() {
            innerD.addEventListener('mouseover', () => {
                innerD.style.backgroundColor = 'black'
            });
        }
        callBlackBackground(); //default etch color

        //Function to pick custume color
        function chooseColor() {
            innerD.addEventListener('mouseover', () => {
                innerD.style.backgroundColor = colorPicker.value
            });
        }

        //Function to increase black intensity by 10% on each pixel pass
        function blackShadding() {
            let j = 0;
            for (let k = 1; k <=1; k++) {
                innerD.addEventListener('mouseover', () => {
                    innerD.style.backgroundColor = 'rgba('+0+','+0+','+0+','+(j += 0.1*10)/10+')';
                });
            }
        }

        //Event listeners assignment
        right3.addEventListener('click', blackShadding);
        right2.addEventListener('click', callBlackBackground);
        right1.addEventListener('click', getRandomRgb);
        left1.addEventListener('click', clearAll);
        left2.addEventListener('click', erasePixel);
        okButton.addEventListener('click', () => {
            div.removeChild(innerD);
        });
        range.addEventListener('change', () => {
            div.removeChild(innerD);
        });
        colorPicker.addEventListener('change', chooseColor);

    }
}

//Function for popup input
function promptInput() {
    let promptValue = +input.value;
    if (promptValue < 1) {
        h4.textContent = 'Please enter a number above 0.';
        createInnerDivs(range.value);
        return;
    } else if (promptValue > 100) {
        h4.textContent = 'Please enter a number below 30.';
        createInnerDivs(range.value);
    } else {
        range.value = promptValue;
        gridText.textContent = promptValue;
        createInnerDivs(promptValue);
        toggleModal();
    }
}

//Function to get value from range input
function getRangeValue() {
    createInnerDivs(range.value);
    gridText.textContent = range.value;
}

//Function to toggle modal
function toggleModal() {
    modal.classList.toggle('show-modal');
}

mainControl.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);
range.addEventListener('click', getRangeValue);
okButton.addEventListener('click', promptInput);
createInnerDivs(range.value);