const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuBar = $(".menu-bar")
menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active")
    $(".header__nav").classList.toggle("active")
})

window.addEventListener('scroll',function(){
    if(this.pageYOffset >66){
        $('.header').classList.add('sticky')
    }
    else{
        $('.header').classList.remove('sticky')

    }
})
// window.addEventListener('scroll',function(){
//     if(this.pageYOffset>300 && this.pageYOffset<800 ){
//         $('.about__text').classList.add('active');
//         $('.about__box').classList.add('active');
//         $('.about__story').classList.add('active');
//     }else{
//         $('.about__text').classList.remove('active');
//         $('.about__box').classList.remove('active')
//         $('.about__story').classList.remove('active')
//     }
// })

const menuTab = $(".menu__tap");
console.log(menuTab);
menuTab.addEventListener('click',function(e){
    if(e.target.classList.contains('menu__tap-btn')){
        const target = e.target.getAttribute("data-target")
        // console.log(target);
        menuTab.querySelector(".active").classList.remove('active');
        e.target.classList.add('active');

        const menu = $('.menu')
        menu.querySelector(".menu__tap-content.active").classList.remove('active');
        menu.querySelector(target).classList.add('active');
    }
})




