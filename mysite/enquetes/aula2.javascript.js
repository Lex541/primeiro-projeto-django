const guessBtns = document.querySelectorAll('#num_btn')
let randomNumber = getRandomNumber()
let guessedNumbers = []
const attempts = 5
guessBtns.forEach(btn => {

    btn.addEventListener('click', checkNumber)
})

console.log('Random Number: ', randomNumber)
console.log('Guessed Numbers: ', guessedNumbers)


function checkNumber(e) {

    // Get Num
    const clickedNumber = parseInt(e.target.innerText)

    if(clickedNumber === randomNumber){
        // Game Win
       // alert('You Win')
       e.target.classList.add('correct')
    }else{
      // Wrong Number Clicked
      // alert('You Lost')
      e.target.classList.add('wrong')
      guessedNumbers.push(clickedNumber)  
        alert('You Lost')
    }
}

// Get Random Number from 1 to 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10 ) + 1
}