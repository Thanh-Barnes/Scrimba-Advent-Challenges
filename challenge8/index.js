/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
const dice = document.querySelector(".dice");
const middle = document.querySelector(".dot1");
const topLeft = document.querySelector(".dot2");
// const middleLeft = document.querySelector(".dot3");
const bottomLeft = document.querySelector(".dot4");
const topMiddle = document.querySelector(".dot5");
const bottomMiddle = document.querySelector(".dot6");
const topRight = document.querySelector(".dot7");
const bottomRight = document.querySelector(".dot8");
// const middleRight = document.querySelector(".dot9")

const dots = document.querySelectorAll(".dots");
const diceResult = document.querySelector('.diceResult');

// dice numbers
const num1 = [middle];
const num2 = [bottomLeft, topRight];
const num3 = [bottomLeft, middle, topRight];
const num4 = [topLeft, topRight, bottomLeft, bottomRight];
const num5 = [topLeft, topRight, middle, bottomLeft, bottomRight];
const num6 = [topLeft, topMiddle, topRight, , bottomLeft, bottomMiddle, bottomRight];

const diceArr = [num1, num2, num3, num4, num5, num6];

randomNum = () => {
    let ranNum = Math.ceil(Math.random() * 6);
    return ranNum;
}

middle.classList.add('show');

dice.addEventListener('click', () => {
    let num = randomNum();

    dots.forEach(dot => {
        dot.classList.add('hide');
        dot.classList.remove('show')
    })

    let diceNum = diceArr[num -1];

    diceNum.forEach(dot => { 
            dot.classList.add('show');
    }) 
    
    diceResult.innerText = num;
})



// DETAILED INSTRUCTIONS
// 1. pick out the neccesary elements from the HTML
// 2. Create other 5 dice faces in CSS
// 3. use eventlisteners on the appropriate div
// 4. Display dice faces randomly on click

// STRETCH GOALS:
// - Can you show the number you rolled as a integer along-side the dice face?
// - Can you improve the overall design?

