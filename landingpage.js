window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
        navbar.style.backgroundColor = '#F9E400';
    } else {
        navbar.style.backgroundColor = '#FFAF00';
    }
    
});


