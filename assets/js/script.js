const hamburger = document.querySelector('.header-hamburguer');

document.querySelector('main').addEventListener('click',()=>{
    hamburger.classList.remove('ativo');
    document.querySelector('.header-navbar').classList.remove('ativo');
})

hamburger.addEventListener('click',evt =>{
    evt.target.classList.toggle('ativo');
    document.querySelector('.header-navbar').classList.toggle('ativo');
});

window.onload = () =>{
    menuStrinking();
    linkActiveId();
    sectionAnimation('.fade__in',600);
    sectionAnimation('.slide__up',600);
}

window.onscroll = ()=>{
    menuStrinking();
    linkActiveId();
    sectionAnimation('.fade__in',600);
    sectionAnimation('.slide__up',600);

};

const menuStrinking=()=>{
    return document.documentElement.scrollTop > 50 ?
    document.querySelector('header .container').classList.add('active'):
    document.querySelector('header .container').classList.remove('active');
}

const linkActiveId = ()=>{
    let sections = document.querySelectorAll('section');
    let id;
    [...sections].forEach(section=>{
        if(scrollY >= section.offsetTop -20){
            id =  section.getAttribute('id');
        }
    });
    let navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(navLink => {
        if(document.documentElement.scrollTop < 600){
            if(navLink.className.includes('home'))

            return navLink.classList.add('active')
        }
        
        navLink.className.includes(id) ? navLink.classList.add('active'): navLink.classList.remove('active');
    });
}

const sectionAnimation = (animation,offset) =>{
    let elmt = document.querySelectorAll(animation);

    elmt.forEach(el=>{
        let offsetTop = el.getBoundingClientRect().top - window.screenTop;
        if(offsetTop < offset){
            el.classList.add('active')
        }
    });
};

