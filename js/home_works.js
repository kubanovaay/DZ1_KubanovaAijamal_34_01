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
function moveRight(childBlock, parentWidth, currentPosition) {
    if (currentPosition < parentWidth - childBlock.offsetWidth) {
        currentPosition++;
        childBlock.style.left = currentPosition + 'px';
        setTimeout(() => moveRight(childBlock, parentWidth, currentPosition), 10);
    }
}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const parentWidth = parentBlock.offsetWidth;
// Устанавливаем начальную позицию маленького блока
let currentPosition = 0;

moveRight(childBlock, parentWidth, currentPosition);

