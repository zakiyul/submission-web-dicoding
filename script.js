const humburgerIcon = document.querySelector('.bi-list');
const closeIcon = document.querySelector('.bi-x-lg');

closeIcon.style.display = 'none';

humburgerIcon.addEventListener('click', function(event){
    humburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', function(event){
    humburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
})