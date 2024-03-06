nav = document.querySelector('.nav')

window.addEventListener('scroll', fixnav)

function fixnav() {
    console.log(window.scrollY)
    if(window.scroll > 220) {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}