let colorcodecontainer = document.getElementById('color-code');
let randomColor = '';
let optionsContainer = document.getElementById('options-container');
let scoreContainer = document.getElementById('score');


function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function genrateRandomColor() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);  
    const blue = generateRandomNumberBetween(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Initialize score as a number
let score = 0;

function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
    
}

function validateResult(e) {
    const selectedColor = e.target.style.backgroundColor;   
    if (selectedColor === randomColor) {
        incrementScore();
    }
    else {
        score = 0;
    }
    window.localStorage.setItem('score', score);
    startGame();
}


function startGame() {

    score = Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score;

    optionsContainer.innerHTML = null;
    randomColor = genrateRandomColor();
    colorcodecontainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);
    for(let i=0; i < 6 ; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', validateResult)

        div.style.backgroundColor = i === ansIndex ? randomColor  : genrateRandomColor();
        optionsContainer.append(div);
    }
}

window.addEventListener('load', startGame);