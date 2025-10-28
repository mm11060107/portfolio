//ページ遷移スライドアニメーション
$(function() {
  // NEXTボタン
  $('.work__btn.next').on('click', function(e) {
    e.preventDefault();
    const linkUrl = $(this).attr('href');
    $('body').addClass('slide-out-next');
    setTimeout(function() {
      window.location.href = linkUrl;
    }, 600);
  });

  // PREVボタン
  $('.work__btn.prev').on('click', function(e) {
    e.preventDefault();
    const linkUrl = $(this).attr('href');
    $('body').addClass('slide-out-prev');
    setTimeout(function() {
      window.location.href = linkUrl;
    }, 600);
  });
});