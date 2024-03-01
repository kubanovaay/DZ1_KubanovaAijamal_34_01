document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const cardContainer = document.getElementById('card-container');

        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const image = document.createElement('img');
            image.src = 'https://s9.travelask.ru/system/images/files/001/290/308/wysiwyg_jpg/1451229503_16.jpg?1553007974'; // Красивое изображение

            const title = document.createElement('h2');
            title.textContent = post.title;

            const description = document.createElement('p');
            description.textContent = post.body;

            cardContent.appendChild(title);
            cardContent.appendChild(description);

            card.appendChild(image);
            card.appendChild(cardContent);

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
