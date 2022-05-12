//Function to generate random number between 1 to 256
function generateRandomNumber() {
    let randomNum = Math.random();
    let randomNumInt = Math.floor(randomNum*256)+1;
    return randomNumInt;}

//Function to use the random function to generate random colors
function generateRandomColor() {
    return ("rgb("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")");
}

//Function to create divs for sketching
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
        innerD.style.border = '0.1px dotted rgba(179,179,179,0.8)';
        innerD.style.boxSizing = 'border-box';
        innerD.addEventListener('click', () => {
        innerD.style.backgroundColor = generateRandomColor();
        })
    }
}

createInnerDivs(4);