window.onload = function(){
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    });

    const menu = document.querySelector(".nav__menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    // open nav menu 
    const openNav = () => {
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    }
    menuBtn.addEventListener('click', openNav);

    // close nav menu 
    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    }

    closeBtn.addEventListener('click', closeNav);

    // courses
    const courses = document.querySelectorAll('.course__header');

    courses.forEach(course => {
        course.addEventListener('click', () => {
           let courseBox = course.closest(".course");  
           courseBox.classList.toggle('open');
            // change icon
            const icon = courseBox.querySelector('.course__icon i');
            if(icon.className === 'uil uil-plus') {
                icon.className = "uil uil-minus";
            } else {
                icon.className = "uil uil-plus";
            }
        })
    });

}