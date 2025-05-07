
document.querySelector('.button-3d .link[href="index.html"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    alert('Navigating to the previous page!');
    window.location.href = 'index.html'; 
});

document.querySelector('.button-3d .link[href="index2.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Navigating to the next page!');
    window.location.href = 'index2.html';
});