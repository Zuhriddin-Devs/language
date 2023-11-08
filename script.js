const elText = document.querySelector('#js-text');
const elSelect = document.querySelector('#js-select');

elSelect.addEventListener('change', () => {
    const selectLanguage = elSelect.value;

    if (selectLanguage == 'uz') {
        elText.textContent = "Salom!";
    } else if (selectLanguage == 'en') {
        elText.textContent = "Hello!";
    } else if (selectLanguage == 'ru') {
        elText.textContent = "Привет!";
    };
});