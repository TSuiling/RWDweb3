
//當滑鼠滑入#sec3的影像(.col-12更理想)時==========================
$('#sec3 .col-12').hover(
  function () {
    //滑入時, 目前滑入的套用.scale-b
    $(this).addClass('scale-b');
    //其餘的套用.scale-s
    $(this).siblings().addClass('scale-s');
  },
  function () {
    //滑出時, 所有的.scale-b及.scale-s移除
    $('#sec3 .col-12').removeClass('scale-b').removeClass('scale-s');
  }
);


//#sec3點選圖片展開Modal的詳細介紹==================
//運用JS取出相關資料=>放入Modal
$('#sec3 .col-12 img').click(function () {
  //取出相關資料
  //var className = $(this).parent().parent().attr('data-classname');
  var className = $(this).parents('.row').attr('data-classname');
  //console.log('className==='+className);

  var prodName = $(this).parent().children('.prod-name').text();
  //console.log('prodName==='+prodName);

  var prodImg = $(this).attr('data-img');
  //console.log('prodImg==='+prodImg);

  var prodDesc = $(this).parent().children('.desc').html();
  //console.log('prodDesc==='+prodDesc);

  $('#prodModalLabel').text(className);
  $('.modal-body h3').text(prodName);
  $('.modal-body img').attr('src', './img/' + prodImg);
  $('.modal-body .desc').html(prodDesc);

});
