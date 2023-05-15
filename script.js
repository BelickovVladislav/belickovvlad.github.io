const surpriseButton = document.querySelector('.not-found-surprise__button');
const surpriseText = document.querySelector('.not-found-surprise__text');

surpriseButton.addEventListener('click', () => {
    surpriseButton.classList.toggle('hidden');
    surpriseText.classList.toggle('hidden');
});