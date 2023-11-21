document.addEventListener('DOMContentLoaded', function () {
    const elText = document.querySelector('#js-text');
    const elLanguageSelect = document.querySelector('#js-select');

    elLanguageSelect.addEventListener('change', function () {
        let selectedLanguage = elLanguageSelect.value;

        if (selectedLanguage === 'uz') {
            elText.textContent = 'Salom!';
        } else if (selectedLanguage === 'en') {
            elText.textContent = 'Hello!';
        } else if (selectedLanguage === 'ru') {
            elText.textContent = 'Привет!';
        }
    });

    elText.textContent = 'Salom!';
});