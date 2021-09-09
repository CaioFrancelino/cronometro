document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    event.preventDefault();

    toggleTheme();
});

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.querySelector('#container-toggle').classList.toggle('dark');
    document.querySelector('a').classList.toggle('dark');
    document.querySelector('.container').classList.toggle('container-dark');

};