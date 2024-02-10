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
