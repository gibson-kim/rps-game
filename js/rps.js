
function computerPlay() {
    let rps = Math.floor(Math.random() * 3);
    if (rps == 0) { return "rock"; }
    else if (rps == 1) { return "paper"; }
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tied! You both selected " + playerSelection + ".";
    }
    else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') { return winRound(playerSelection, computerSelection); }
            else return loseRound(playerSelection, computerSelection);
        }
        else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') { return loseRound(playerSelection, computerSelection); }
            else return winRound(playerSelection, computerSelection);
        }
        else {
            if (computerSelection == 'scissors') { return loseRound(playerSelection, computerSelection); }
            else return winRound(playerSelection, computerSelection);
        }
    }
}

function loseRound(playerSelection, computerSelection) {
    return `You lost! You picked ${playerSelection}, while computer picked ${computerSelection}.`;
}

function winRound(playerSelection, computerSelection) {
    return `You won! You picked ${playerSelection}, while computer picked ${computerSelection}.`;            
}

function playRPS(playerSelection) {
    const check = document.querySelector('#outer-box');
    if (check != null) {
        check.parentNode.removeChild(check);
    }
    const container = document.querySelector('body');
    const outerBox = document.createElement('div');
    outerBox.id = 'outer-box';
    outerBox.style.textAlign = 'center';
    outerBox.style.marginTop = '50';

    const innerBoxLeft = document.createElement('div');
    innerBoxLeft.style.textAlign = 'center';
    innerBoxLeft.style.display = 'inline-block';
    const p1 = document.createElement('p');
    p1.textContent = 'You picked:';
    const img1 = document.createElement('img');
    img1.src = `img/${playerSelection}.jpg`;
    innerBoxLeft.appendChild(p1);
    innerBoxLeft.appendChild(img1);

    const innerBoxRight = document.createElement('div');
    innerBoxRight.style.textAlign = 'center';
    innerBoxRight.style.display = 'inline-block';
    const p2 = document.createElement('p');
    p2.textContent = 'Computer picked:';
    const img2 = document.createElement('img');
    let computerSelection = computerPlay();
    img2.src = `img/${computerSelection}-r.jpg`;
    innerBoxRight.appendChild(p2);
    innerBoxRight.appendChild(img2);

    const result = document.createElement('p');
    result.textContent = playRound(playerSelection, computerSelection);

    outerBox.append(innerBoxLeft);
    outerBox.append(innerBoxRight);
    outerBox.append(result);
    
    
    container.appendChild(outerBox);
}

const buttons = document.querySelectorAll('.pick');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRPS(button.id);
    });
});