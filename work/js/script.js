$(function(){
  
    //class="img_button"の要素をクリックした時、その要素の兄弟要素のclass="content"がスライドトグル表示/非表示される
    $(".img_button").on("click",function(){
      let target = $(this).siblings(".content");
      target.slideToggle("slow");
  
      $("html, body").animate({scrollTop:target.offset().top}, "slow");
    })
  
    //class="close_button"の要素をクリックした時、その要素の親要素のclass="content"がスライドアップ非表示される
    $(".close_button").on("click",function(){
      $(this).parent(".content").slideUp("slow");
    })
  
    document.getElementById( "btn-backtotop" ).addEventListener('click', function(e) {
      anime.remove("html, body");
      anime({
        targets: "html, body",
        scrollTop: 0,
        dulation: 600,
        easing: 'easeOutCubic',
      });
      return false;
    });

  });