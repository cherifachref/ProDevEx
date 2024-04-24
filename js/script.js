const navbar_main = document.getElementById('navbar-main')
addEventListener("scroll", (event) => {
    if(window.scrollY>40){
        //navbar_main.style.display ='none'
        navbar_main.style.backgroundColor ='white'
        navbar_main.children[0].style.color ='black'
    }else {
        navbar_main.style.backgroundColor ='transparent'
        navbar_main.children[0].style.color ='white'
    }
});