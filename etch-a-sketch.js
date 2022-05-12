//Function to generate random number between 1 to 256
function generateRandomNumber() {
    let randomNum = Math.random();
    let randomNumInt = Math.floor(randomNum*256)+1;
    return randomNumInt;}

//Function to use the random function to generate random colors
function generateRandomColor() {
    return ("rgb("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")");
}