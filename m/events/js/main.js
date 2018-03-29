window.addEventListener('scroll', function() {
    
    var y = window.pageYOffset;
    var headerHeight = document.getElementById('main-header').offsetHeight;
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    if(y >= navHeight) {
        document.getElementById('main-nav').classList.add('transparent');
    } else {
        document.getElementById('main-nav').classList.remove('transparent');
    }
    
    if(y >= headerHeight) {
        var bgPos = -((y - headerHeight) / 5);
       console.log(y - headerHeight);
        document.getElementById('background').style.backgroundPosition = bgPos + 'px' + ' 0';
    }
});