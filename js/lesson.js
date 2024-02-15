// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentIndex = 0;

const hideTabContents = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContents = (index) => {
    hideTabContents();
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentIndex = tabIndex;
                showTabContents(tabIndex);
            }
        });
    }
};

// Функция для переключения на следующую вкладку
const switchTab = () => {
    const nextIndex = (currentIndex + 1) % tabs.length
    hideTabContents();
    showTabContents(nextIndex);
    currentIndex = nextIndex;
};

setInterval(switchTab, 3000);

showTabContents(currentIndex);
