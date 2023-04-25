// 運用AJAX技術
// 指定位置.載入(指定的檔案)
$('.header').load('header.html');
$('.footer').load('footer.html');



new WOW().init();
//==================================================================
//當視窗捲動時
//假如是桌機版
//假如整頁向上滑出的範圍超過.navbar的高度, 
//則加上.fixed的名稱

$(window).scroll(function () {
  if ($('.navbar-toggler').is(':hidden')) {
    if ($('html').scrollTop() > $('.navbar').innerHeight()) {
      $('.navbar').addClass('fixed');
    }
    if ($('html').scrollTop() == 0) {
      $('.navbar').removeClass('fixed');
    }
  }
});

//==================================================================
//手機版, 當點選.navbar下拉選單的項目後, 
//沒有Fn時, if只要網頁剛進入時執行一次, 
//有Fn時, 可以運用window的resize事件反覆執行這個Fn
function chk_nav_menu() {
  if ($('.show-nav-menu').is(':visible')) {
    $('.navbar-collapse .nav-link').click(function () {
      $('.show-nav-menu').trigger('click');
    });
  }
}
//一開始是桌機版 => 縮小視窗 => 手機版 => 結果上述自動trigger並不存在 => ????
chk_nav_menu();

$(window).resize(function () {
  chk_nav_menu();
});



//==================================================================
function chk_offcanvas_menu() {
  if ($('.show-offcanvas-menu').is(':visible')) {
    $('.offcanvas .navbar-nav .nav-link').click(function () {
      //等.5s後再執行
      setTimeout(function () {
        $('.offcanvas .btn-close').trigger('click');
      }, 500);
    });
  }
}
//上述????仍然存在
//整頁滑動的定位不對了?????
chk_offcanvas_menu();
$(window).resize(function () {
  chk_offcanvas_menu();
});

