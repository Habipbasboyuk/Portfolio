const $lightActivator = document.querySelector('.sun');
const $darkActivator = document.querySelector('.moon');
const $html = document.querySelector('html');


const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'light') {
    $html.classList.add('light-mode');
    $lightActivator.classList.add('invisible');
    $darkActivator.classList.remove('invisible');
} else {
    $html.classList.remove('light-mode');
    $darkActivator.classList.add('invisible');
    $lightActivator.classList.remove('invisible');
}


$lightActivator.addEventListener('click', () => {
    $html.classList.add('light-mode');
    $lightActivator.classList.add('invisible');
    $darkActivator.classList.remove('invisible');
    localStorage.setItem('theme', 'light');
});


$darkActivator.addEventListener('click', () => {
    $html.classList.remove('light-mode');
    $darkActivator.classList.add('invisible');
    $lightActivator.classList.remove('invisible');
    localStorage.setItem('theme', 'dark');
});
