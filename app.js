//DOM Elements
const $display = document.querySelector('.display input')
const $buttons = document.querySelectorAll('button')
const $button = [...$buttons]

//Add values on press
const addValue = (event) => $display.value += event.target.innerText

//Calculate finial result 
const calculate = () => $display.value = eval($display.value)

//Remove last number from display
const back = () => $display.value =  $display.value.substring(0, $display.value.length-1)

//clear display
const clearDisplay = () => $display.value = '' 

//loop on button click
$button.forEach(button => button.addEventListener('click', addValue))
