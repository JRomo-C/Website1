nav = document.querySelector('.nav')

window.addEventListener('scroll', fixnav)

function fixnav() {
    if(window.scrollY > 240) {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}