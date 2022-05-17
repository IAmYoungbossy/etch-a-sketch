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
h4.textContent = 'Please enter a number between 1 and 100.';

/*Generate random number between 1 to 256*/
function generateRandomNumber() {
    let randomNum = Math.random();
    let randomNumInt = Math.floor(randomNum*256)+1;
    return randomNumInt;
}

/*Generate random colors*/
function generateRandomColor() {
    return "rgb("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")";
}

/*Create grid squares*/
function createGridSquares(pixel) {
    const widthAndHeight = 350; //Width and Height of grid Container
    const pixelSquare = (widthAndHeight/pixel)+'px';
    const totalPixels = pixel*pixel;
    for (let i = 1; i <= totalPixels; i++) {
        let innerD = document.createElement('div');
        innerD.classList.add('innerDivs');
        div.appendChild(innerD);
        innerD.style.backgroundColor = '#cbcfc2';
        innerD.style.height = pixelSquare;
        innerD.style.width = pixelSquare;
        innerD.style.margin = '0px';
        innerD.style.border ='1px solid rgba(179,179,179,1)';
        innerD.style.boxSizing = 'border-box';
    }
    blackColoring();
}
createGridSquares(range.value);

//Default colour
function blackColoring() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        innerDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

//Random colour
function getRandomColor() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        innerDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = generateRandomColor();
        });
    });
}

//For custume colour
function chooseColor() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        innerDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colorPicker.value
        });
    });
}

//Clears all drawings
function clearAll() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        innerDiv.style.backgroundColor = '#cbcfc2'
    });
}

//Increases black intensity by 10% on each pixel pass
function blackShadding() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        let i = 0;
        for (let j = 1; j <= 1; j++) {
            innerDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'rgba('+0+','+0+','+0+','+(j += 0.1*10)/10+')';
            });
        }
    });
}

//Clears background on each pixels
function erasePixel() {
    const innerDivs = document.querySelectorAll('.innerDivs');
    innerDivs.forEach(innerDiv => {
        innerDiv.addEventListener('mouseover', (e) => {
            innerDiv.style.backgroundColor = '#cbcfc2';
        });
    });
}

//User prompt for input
function promptInput() {
    let promptValue = +input.value;
    if (promptValue < 1) {
        h4.textContent = 'Please enter a number above 0.';
        createGridSquares(range.value);
        return;
    } else if (promptValue > 100) {
        h4.textContent = 'Please enter a number below 100.';
        createGridSquares(range.value);
    } else {
        range.value = promptValue;
        gridText.textContent = promptValue;
        createGridSquares(promptValue);
        toggleModal();
    }
}

//Modal prompt
function toggleModal() {
    modal.classList.toggle('show-modal');
}

//Gets range value from input
function getReangeValue() {
    createGridSquares(range.value);
    gridText.textContent = range.value;
}

//Removes all gridsquares
function remove() {
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//Event listeners
cancelButton.addEventListener('click', toggleModal);
mainControl.addEventListener('click', toggleModal);
left1.addEventListener('click', clearAll);
right1.addEventListener('click', getRandomColor);
colorPicker.addEventListener('change', chooseColor);
right2.addEventListener('click', blackColoring);
left2.addEventListener('click', erasePixel);
right3.addEventListener('click', blackShadding);
okButton.addEventListener('click', () => {
    remove();
    promptInput();
    toggleModal;
});
range.addEventListener('change', () => {
    remove();
    getReangeValue();
});
window.onclick = function(event) {
    if(event.target == modal) {
        toggleModal();
    }
}