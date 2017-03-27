$(document).ready(function() {
	var grid = $('.grid');

    $('.bxslider').bxSlider();

    $('.form__search__btn').on('click', function(e) {
        $('.holiday_ideas__result').empty();
        getAjax();
        e.preventDefault();
    });

    $('.form__search__input').keypress(function(e) {
        if (e.which == 13) {
            $('.holiday_ideas__result').empty();
            getAjax();
            e.preventDefault();
        }
    });

    function getAjax() {
        $.ajax({
            url: 'https://pixabay.com/api/?key=4567175-1fcb090e1f6a018a904e3d3b2&q=' + $('.form__search__input').val(),
            method: 'GET',
            dataType: 'jsonp',
            success: function(result) {
                onComplete(result);
            },
            error: function() {
                console.log('error');
            }
        });
    };

    function onComplete(result) {
       grid.masonry('destroy');
       for (var i = 0; i < 7; i++) {
           var hit = result.hits[i];
           var item = $('<figure class="grid-item">\
               <img target="_blank" src="' + hit.webformatURL + '"></img><p class="tag">' + hit.tags + '</p></figure>');
           grid.append(item);
           grid.imagesLoaded().progress( function() {
               grid.masonry('layout');
           });
       }
       initMasonry();
   }

   function initMasonry() {
       grid.masonry({
           itemSelector: '.grid-item',
           percentPosition: true
                });
   }
   getAjax();
   initMasonry();

});
