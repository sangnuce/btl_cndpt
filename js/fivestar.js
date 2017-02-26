$(function() {
  $.each(data.products, function(index, product){
    var item = '<div class="col-md-3">\
      <div class="item">\
        <div class="image">\
          <img src="files/products/' + product.id + '.png" />\
        </div>\
        <div class="info">\
          <div class="price">' + $.number(product.price, 0, ' ', '.') + 'đ/' + product.unit + '</div>\
          <div class="name">' + product.name + '</div>\
        </div>\
      </div>\
    </div>';
    $('#products').append(item);
    if(product.is_hot_product) {
      $('#hot-products').append(item);
    }
  });

  $('#hot-products .item').append('<img src="images/best-seller.png" class="product-label" />')

  $('#music-control').click(function() {
    var $music = $('#music')[0];
    if($music.paused == false) {
      $music.pause();
      $(this).attr('title', 'Play background music');
      $(this).html('<i class="fa fa-play"></i>');
    } else {
      $music.play();
      $(this).attr('title', 'Pause background music');
      $(this).html('<i class="fa fa-pause"></i>');
    }
  });
});
