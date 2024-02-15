// MODAL

const modal = document.querySelector('.modal');
const modalTriggerButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

let modalShown = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalShown = true;
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTriggerButton.onclick = () => openModal();

modalCloseButton.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal){
        closeModal();
    }
}


const handleScroll = () => {
    const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

    if (isBottom && !modalShown) {
        openModal();
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);


