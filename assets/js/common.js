//-------------------------------------------
//swiper
//-------------------------------------------
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
}
new Swiper('.swiper-container-4', swipeOption);

//-------------------------------------------
//parallax01
//-------------------------------------------
$('.img-parallax').each(function () {
  var img = $(this);
  var imgParent = $(this).parent();

  function parallaxImg() {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();

    var winBottom = winY + winH;
    if (winBottom > imgY && winY < imgY + parentH) {
      var imgBottom = ((winBottom - imgY) * speed);
      var imgTop = winH + parentH;
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    },
    ready: function () {
      parallaxImg();
    }
  });
});

//-------------------------------------------
//スムーススクロール
//-------------------------------------------
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

//-------------------------------------------
//toggle
//-------------------------------------------
$(".l-header__toggle").click(function () {
  $(this).toggleClass('open');
  $(".l-header__inner").toggleClass('panelactive');
});

$(".l-header__inner a").click(function () {
  $("l-header__toggle").removeClass('open'); //ボタンの activeクラスを除去し
  $(".l-header__inner").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});

//-------------------------------------------
//parallax02
//-------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelector(".js-right");
  if (elem !== null) {
    let target = document.getElementsByClassName("js-right");
    let parallaxConfig = {
      delay: 0,
      orientation: "left",
      scale: 1.2,
    };
    const parallax_instance = new simpleParallax(target, parallaxConfig);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelector(".js-left");
  if (elem !== null) {
    let target = document.getElementsByClassName("js-left");
    let parallaxConfig = {
      delay: 0,
      orientation: "right",
      scale: 1.2,
    };
    const parallax_instance = new simpleParallax(target, parallaxConfig);
  }
});

//-----------------------------------------------------
//glowAnime
//-----------------------------------------------------
// glowAnimeにglowというクラス名を付ける
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    } else {
      $(this).removeClass("glow");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  GlowAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".glowAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//-----------------------------------------------------
//フェードイン
//-----------------------------------------------------
jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 200) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

//-----------------------------------------------------
//ページトップボタン
//-----------------------------------------------------
$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) { // 100pxスクロールしたら発火
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      500 // 500ミリ秒かけてページトップに戻る
    );
    return false;
  });
});


//-----------------------------------------------------
//モーダル
//-----------------------------------------------------

$(function () {
  $(".c-btn").click(function(){
    $(".c-modal").fadeIn();
  });

  $(".c-modal__close").click(function(){
    $(".c-modal").fadeOut();
  });
});