// 1
function validateGmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

const gmailInput = document.getElementById('gmail_input');
const resultSpan = document.getElementById('gmail_result');
const checkButton = document.getElementById('gmail_button');

checkButton.addEventListener('click', function() {
    const email = gmailInput.value.trim();

    if (validateGmail(email)) {
        resultSpan.textContent = 'Valid Gmail address';
        resultSpan.style.color = 'green';
    } else {
        resultSpan.textContent = 'Invalid Gmail address';
        resultSpan.style.color = 'red';
    }
});

// 2
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')


const mainWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const mainHeight = parentBlock.offsetHeight - childBlock.offsetHeight
let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < mainWidth && positionY === 0) {
        positionX+=2;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= mainWidth && positionY < mainHeight) {
        positionY+=2;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= mainHeight && positionX > 0) {
        positionX-=2;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY-=2;
        childBlock.style.top = `${positionY}px`;
    }

    requestAnimationFrame(moveBlock);
}

moveBlock();

// 3
document.addEventListener("DOMContentLoaded", function() {
    const secondsDisplay = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    let timerId;
    let counter = 0;

    function startTimer() {
        timerId = setInterval(function() {
            counter++;
            secondsDisplay.textContent = counter;
        }, 1000);
    }

    startButton.addEventListener("click", function() {
        if (!timerId) {
            startTimer();
        }
    });

    stopButton.addEventListener("click", function() {
        clearInterval(timerId);
        timerId = undefined;
    });

    resetButton.addEventListener("click", function() {
        clearInterval(timerId);
        timerId = undefined;
        counter = 0;
        secondsDisplay.textContent = counter;
    });
});



