const read = document.querySelector('.read-content')
const divs = document.querySelectorAll('.group')
const noti = document.querySelector('.noti-num')
const circles = document.querySelectorAll('#circle')

read.addEventListener('click', function(){
    divs.forEach(function(div){
        div.classList.add('clear');
    })
    noti.innerHTML = 0
    circles.forEach(function(circle){
        circle.classList.add('none')
    })
})