$(function(){
  // ①トップ画像に文字を表示させるアニメーション
  $(".top").one("mouseover", function(){
    $(".welcome").toggleClass("changed")
    console.log("発火")
  })

  // ②ページ内リンク a[href^=#]は、aタグのhref属性が"#"ではじまるものを抽出（前方一致）
  $('a[href^="#"]').click(function() {
      
      var speed = 500; // スクロールの速度ミリ秒
      var href= $(this).attr("href"); //イベント発生源（this）のhref属性を取得
      var target = $(href == "#" || href === "" ? 'html' : href);
      //移動先を指定。href属性が"#"のもの、または、href属性が空のときは、"html"(文字列)、それ以外は上で定義した変数hrefを指定。

      var position = target.offset().top; // 移動先を数値で取得      
      $('html,body').animate({scrollTop:position}, speed, 'swing'); // スムーススクロール
      console.log("スクロール")
      return false; //a要素（link_to）のデフォルトに機能を停止

  });
  // ②終了

})