$(document).ready(function(){
    $(".fa-bars").click(function(){

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
        $('header').removeClass('header-active');
        }
     
    });

});


    let section = document.querySelectorAll('section')
    let navlink = document.querySelectorAll('header nav a')
    window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top<offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}


var typed = new Typed(".auto-type", {
    strings:["Expert Web"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
