window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }

var bLazy = new Blazy({
});

$(function(event) {
  console.log('working');
       $('img.lazy').lazyload({
        //  event: 'click'
         effect: "fadeIn",
         effectTime: 10000,
         threshold: 0
       });
  });

});
