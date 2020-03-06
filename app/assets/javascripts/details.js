$(function(){ 
  //家計簿アプリ
  $(".account").on({
    "mouseenter": function(){
      $(".account").find("img").attr("src", "/家計簿動画.gif")
    },
      //アプリ画像がhoverのとき、動画に変更
    
    'mouseleave': function(){
      $(".account").find("img").attr("src", "/家計簿アプリ.png")
      //離れると戻る
		}
  });

//chat-space
  $(".chat").on({
    "mouseenter": function(){
      $(".chat").find("img").attr("src", "/チャット.gif")
    },
      //アプリ画像がhoverのとき、動画に変更
    
    'mouseleave': function(){
      $(".chat").find("img").attr("src", "/チャットアプリ.png")
      //離れると戻る
		}
  });

  //フリマ
  $(".furima").on({
    "mouseenter": function(){
      $(".furima").find("img").attr("src", "/フリマ.gif")
    },
      //アプリ画像がhoverのとき、動画に変更
    
    'mouseleave': function(){
      $(".furima").find("img").attr("src", "/フリマアプリ.jpg")
      //離れると戻る
		}
  });


});