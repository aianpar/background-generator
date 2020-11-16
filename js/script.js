// Here's a test channel number, check the console!
console.log(getRandomColorChannel())

// 1) Built a colour string using `getRandomColorChannel()` for each of the three colour channels (R, G, B)
let colRed = getRandomColorChannel()
let colGreen = getRandomColorChannel()
let colBlue = getRandomColorChannel()
// 2) Update user interface (`document`), setting the new colour to the body's background
document.body.style.background = `rgb(${colRed},${colGreen},${colBlue}`
// 3) Use the new RGB value to update the label "rgb(###, ####, ###)" (replacing ###s with the Number values)
document.querySelector(".red").textContent = `${colRed}`
document.querySelector(".green").textContent = `${colGreen}`
document.querySelector(".blue").textContent = `${colBlue}`
// 4) Wrap the random colour procedure in a function named `setNewColour()`, call it from the `console` to test
let setNewColour = function(){
    let colRed = getRandomColorChannel()
    let colGreen = getRandomColorChannel()
    let colBlue = getRandomColorChannel()
    document.body.style.background = `rgb(${colRed},${colGreen},${colBlue}`
    document.querySelector(".red").textContent = `${colRed}`
    document.querySelector(".green").textContent = `${colGreen}`
    document.querySelector(".blue").textContent = `${colBlue}`
}

let eleBtn = document.querySelector(`.btn`)
eleBtn.addEventListener('click',setNewColour)