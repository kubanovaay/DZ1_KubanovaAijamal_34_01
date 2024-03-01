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

// CONVERTER

// DRY - don`t repeat yourself

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');
const CONVERTER_DATA_URL = "../data/converter.json";

const fetchConverterData = async () => {
    try {
        const response = await fetch(CONVERTER_DATA_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const converter = async (element, targetElement1, targetElement2, current) => {
    element.addEventListener('input', async () => {
        try {
            const data = await fetchConverterData();

            switch (current) {
                case 'som':
                    targetElement1.value = (element.value / data.usd).toFixed(2); // Конвертация в доллары
                    targetElement2.value = (element.value / data.eur).toFixed(2); // Конвертация в евро
                    break;
                case 'usd':
                    targetElement1.value = (element.value * data.usd).toFixed(2); // Конвертация в сомы
                    targetElement2.value = (element.value * data.eur / 100).toFixed(2); // Конвертация в евро
                    break;
                case 'eur':
                    targetElement1.value = (element.value * data.eur).toFixed(2); // Конвертация в сомы
                    targetElement2.value = (element.value * data.eur / data.usd).toFixed(2); // Конвертация в доллары
                    break;
                default:
                    break;
            }
            if (element.value === "") {
                targetElement1.value = "";
                targetElement2.value = "";
            }
        } catch (error) {
            console.error(error);
        }
    });
};

converter(somInput, usdInput, eurInput, "som");
converter(usdInput, somInput, eurInput, "usd");
converter(eurInput, somInput, usdInput , "eur");


// CARD SWITCHER

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const cardBlock = document.querySelector('.card');

let count = 1;
const totalTodos = 200;
const TODOS_API_URL = 'https://jsonplaceholder.typicode.com/todos/';
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function updateCard(todoNumber) {
    try {
        const response = await fetch(`${TODOS_API_URL}${todoNumber}`);
        const data = await response.json();
        cardBlock.style.borderColor = `${data.completed ? 'green' : 'red'}`;
        cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>id: ${data.id}</span>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function switchTodoAndUpdate(direction) {
    count = direction === 'next' ? (count % totalTodos) + 1 : (count <= 1) ? totalTodos : count - 1;
    updateCard(count);
}
updateCard(count);

btnPrev.addEventListener('click', () => switchTodoAndUpdate('prev'));
btnNext.addEventListener('click', () => switchTodoAndUpdate('next'));

// Асинхронная функция для запроса и вывода данных в консоль
async function fetchData() {
    try {
        const response = await fetch(POSTS_API_URL, {});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


// WEATHER

const cityInput = document.querySelector('.cityName');
const citySpan = document.querySelector('.city');
const tempSpan = document.querySelector('.temp');

const BASE_URL = 'http://api.openweathermap.org';
const API_KEY = 'e417df62e04d3b1b111abeab19cea714';

const searchCity = async () => {
    cityInput.addEventListener('input', async (event) => {
        const cityName = event.target.value;
        try {
            const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
            const data = await response.json();
            citySpan.innerHTML = data.name ? data.name : 'ГОРОД НЕ НАЙДЕН!';
            tempSpan.innerHTML = data.main?.temp ? `${Math.round(data.main?.temp - 273)}&deg;C` : '....';
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    });
};

searchCity();
