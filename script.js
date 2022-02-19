const humburgerIcon = document.querySelector('.bi-list');
const closeIcon = document.querySelector('.bi-x-lg');
const dropdownBtns = document.querySelectorAll('.list-dropdown');
const dropdownItems = document.querySelector('.dropdown-items');
const teamImgs = document.querySelectorAll('.team-img');
const teamSeeMores = document.querySelectorAll('.team-seeMore')



for(let btn of dropdownBtns){
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

humburgerIcon.addEventListener('click', function(event){
    closeIcon.style.display = 'block';
    humburgerIcon.style.display = 'none';
    dropdownItems.style.display = 'block';
})

closeIcon.addEventListener('click', function(event){
    closeIcon.style.display = 'none';
    humburgerIcon.style.display = 'block';
    dropdownItems.style.display = 'none';
})


for(let [index, teamImg ]of teamImgs.entries()){
    teamImg.addEventListener('mouseenter', function(event){
        teamSeeMores[index].style.display = 'block'
    })
    teamImg.addEventListener('mouseleave', function(event){
        teamSeeMores[index].style.display = 'none'
    })
    teamSeeMores[index].addEventListener('mouseenter', function(event){
        teamSeeMores[index].style.display = 'block'
    })
    teamSeeMores[index].addEventListener('mouseleave', function(event){
        teamSeeMores[index].style.display = 'none'
    })
}