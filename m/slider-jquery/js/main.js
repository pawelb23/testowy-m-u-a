var slideShow = $('.slide-show');
var slideCount = $('.single-slide').length;
var slideWidth = 100 / slideCount;
var slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');

slideShow.find('.single-slide').each(function(index, element) {
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': slideWidth * index + '%'
    })
});

$('.prev-slide').click(function() {
    slide(slideIndex - 1);
});

$('.next-slide').click(function() {
    slide(slideIndex + 1);
});

function slide(newSlideIndex) {
//    if(newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
//        return;
//    }
    
    if(newSlideIndex < 0) {
        newSlideIndex = slideCount - 1;
    }
    
    if(newSlideIndex > slideCount - 1) {
        newSlideIndex = 0;
    }
    
    var slideCaption = $('.slide-caption').eq(newSlideIndex);
    
    var marginLeft = newSlideIndex * (-100) + '%';
    
    slideCaption.hide();
    
    slideShow.animate({
        'margin-left': marginLeft,
    }, 800, function() {
        slideIndex = newSlideIndex;
        slideCaption.fadeIn();
    })
}












