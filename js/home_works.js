const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


gmailButton.addEventListener('Check gmail', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})
function moveRight(childBlock, parentWidth, currentPosition) {
    if (currentPosition < parentWidth) {
        currentPosition++;
        childBlock.style.left = currentPosition + 'px';
        setTimeout(() => moveRight(childBlock, parentWidth, currentPosition), 10);
    }
}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const parentWidth = parentBlock.offsetWidth;
let currentPosition = 0;

moveRight(childBlock, parentWidth, currentPosition);
