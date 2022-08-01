
    var header = document.querySelector('#top')
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 250 && document.documentElement.clientWidth > 1000) {
            header.classList.add('fixed_menu')
        }
        else{
            header.classList.remove('fixed_menu')
        }
    });