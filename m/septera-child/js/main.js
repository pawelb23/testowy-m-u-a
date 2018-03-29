console.log('123');

//$ = jQuery
//Skrypt po kliknieciu w li, ustawia mu klase active, przy okazji zabiera klase .active z pozostalych li

//.each() / jQuery(this) / .siblings() / .addClass()

//Klase active ostyluj w style.css (mozesz do ul dodac np. id :) )

jQuery('#main_ul li').click(function() {
    jQuery(this).siblings().removeClass('active');
    jQuery(this).addClass('active');
});

function adjustContentHeight() {
//    var headerHeight, breadcrumbHeight, contentHeight, footerHeight;
    var bodyHeight = jQuery('body').outerHeight();
//    console.log(bodyHeight);
//    console.log(jQuery(window).outerHeight());
    if(jQuery(window).outerHeight() > bodyHeight) {
        var difference = jQuery(window).outerHeight() - bodyHeight;
        jQuery('#content').css('height', jQuery('#content').outerHeight() + difference + 'px');
    }
}

adjustContentHeight();