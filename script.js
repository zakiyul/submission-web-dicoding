const humburgerIcon = document.querySelector('.bi-list');
const closeIcon = document.querySelector('.bi-x-lg');
const dropdownBtns = document.querySelectorAll('.list-dropdown');

closeIcon.style.display = 'none';

humburgerIcon.addEventListener('click', function(event){
    humburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', function(event){
    humburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
})

for(btn of dropdownBtns){
    btn.addEventListener('click', function(event){
        const listYgDiDapat = event.target;
        if(listYgDiDapat.classList.contains("Active")){
            listYgDiDapat.classList.remove("Active");
            listYgDiDapat.classList.add("list-dropdown")
        }else{
            listYgDiDapat.classList.add("Active");
        }
        console.log(listYgDiDapat)
    })
}