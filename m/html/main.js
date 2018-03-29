//metody jQuery mozemy wywolywac tylko i wylacznie na obiektach jQuery
var tabLinks = $('.link');
console.log(tabLinks);

console.log(tabLinks.eq(0));
console.log(tabLinks[0]);

tabLinks.each(function(index, element) {
    console.log(element + ' ' + index);
})
//
//JavaScript
var tabLinksJS = document.querySelectorAll('.link');
console.log(tabLinksJS);    

tabLinksJS.forEach(function(element, index) {
    console.log(element + ' ' + index);
})