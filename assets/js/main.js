
window.fadeUpAction = function () {
  $('.fadeUp').each(function () {
    const elemPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('show');
    }
  });
};
//ローディング
$(function () {
  $('#who').fadeTo(700, 1, function () {
    const dots = ['.', '..', '...'];
    let i = 0;

    const dotInterval = setInterval(function () {
      $('#dots').text(dots[i]);
      i++;
      if (i >= dots.length) {
        clearInterval(dotInterval);

        setTimeout(function () {
          $('#loading').fadeOut(500, function () {
            $('#main-content').fadeIn(500, function () {
              $('.top-subtitle').addClass('show'); // About meを表示
              // 念のため scroll イベントを発火
              $(window).trigger('scroll');
              if (typeof window.fadeUpAction === "function") {
                window.fadeUpAction();
              }
            });
          });

        }, 300);
      }
    }, 500);
  });
});


$(function () {
  const $hamburger = $(".hamburger");
  // セクションごとのフェードアップ（外部からも呼べるように変更）
  if ($("body").hasClass("sub-page")) {
    // サブページは常に表示
    $hamburger.addClass("show");
  } else {
    // トップページのみスクロールで切り替え
    $(window).on("scroll", function () {
      const scrollY = $(window).scrollTop();
      const winH = $(window).height();
      if (window.innerWidth > 1024) {
        if (scrollY > winH) {
          $hamburger.addClass("show");
        } else {
          $hamburger.removeClass("show");
        }
      } else {
        $hamburger.addClass("show");
      }
      fadeUpAction();
    });
    // ページ読み込み完了後に強制発火（画像なども含めて）
    $(window).on("load", function () {
      $(window).trigger("scroll");
    });
  }
});


$(function () {
  //ハンバーガーメニュー
  $('.hamburger').on('click', function () {
    $('.header').addClass('is-active');
    $('.hamburger').addClass('is-active');
  });
  $('.close-btn').on('click', function () {
    $('.header').removeClass('is-active');
    $('.hamburger').removeClass('is-active');
  });
  //ナビリンククリック時
  $('.nav a[href^="#"]').on('click', function () {
    $('.header').removeClass('is-active');
    $('.hamburger').removeClass('is-active');
  });
});

//セクション内のprev/nextボタン
$(function () {
  const $hobbyWrapper = $('.hobby__items-wrapper');
  const $skillWrapper = $('.skills__skill');
  const $nextBtn = $('.section-next');
  const $prevBtn = $('.section-prev');
  const hobbyGap = 80;
  const skillGap = 64;

  $nextBtn.on('click', function () {
    $hobbyWrapper[0].scrollBy({
      left: $hobbyWrapper.width() + hobbyGap,
      behavior: 'smooth'
    });
  });
  $prevBtn.on('click', function () {
    $hobbyWrapper[0].scrollBy({
      left: -($hobbyWrapper.width() + hobbyGap),
      behavior: 'smooth'
    });
  });
  $nextBtn.on('click', function () {
    $skillWrapper[0].scrollBy({
      left: $hobbyWrapper.width() + skillGap,
      behavior: 'smooth'
    });
  });
  $prevBtn.on('click', function () {
    $skillWrapper[0].scrollBy({
      left: -($hobbyWrapper.width() + skillGap),
      behavior: 'smooth'
    });
  });

});


