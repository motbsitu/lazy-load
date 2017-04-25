// (function(){
//   [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
//   img.setAttribute('src', img.getAttribute('data-src'));
//   img.onload = function() {
//     img.removeAttribute('data-src');
//   };
// });
// })();

window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)
