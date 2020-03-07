$(function(){
  $(".fadein2").css('opacity','1');
  $(".fadein2").css('transform','translateY(0)');
  
  //画像がふわっとでるアニメーション
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var targetElement = $(this).offset().top;
        //イベント発火元の要素のtopからの位置を取得。変数に代入。
        var scroll = $(window).scrollTop();
        //画面のスクロール位置を取得、変数に代入。
        var windowHeight = $(window).height();
        //要素の高さを取得。（pxを含まない値。400px→400）
        if (scroll > targetElement - windowHeight + 200){
          //スクロールの位置が、（表示させたい要素の位置ーwindowの高さ＋200px）より
          //大きいとき以下のCSSを発生。
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
         else if(window.onload){
          console.log("OK")
        }
    });
  });



});

