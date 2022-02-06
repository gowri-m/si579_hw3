/*
* Excercise 1
*
*/
const divBackgroundColor = document.querySelector('#color-block');
const divText = document.querySelector('#center-text');
var count = 0
divBackgroundColor.addEventListener('click', () => changeColor())

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    count += 1
    if (count%2===0){
        divBackgroundColor.style.background = '#F08080';
        divText.innerHTML = "The color is: #F08080"
    }
    else{
        divBackgroundColor.style.background = '#CBFFCC';
        divText.innerHTML = "The color is: #CBFFCC"
    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertbtn = document.querySelector('#convertbtn')
const inputBox = document.querySelector('#f-input')
const outputText = document.querySelector('#c-output')
convertbtn.addEventListener('click', function(){
    convertTemp()
});
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temp = (inputBox.value-32) * 5 / 9
    //Send the calculated temperature to HTML
    outputText.innerHTML =  temp.toFixed(2)

}


