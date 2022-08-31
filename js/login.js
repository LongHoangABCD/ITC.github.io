$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
})

$("#btn-submit").click(function() {
    $("#go-to-index")[0].click();
})

$(".btn-res").click(function() {
    $(".form1").css({
        "opacity" : "0",
        "visibility"    : "hidden"
    })
    $(".form2").css({
        "opacity" : "1",
        "visibility"    : "visible"
    })
})

$(".btn-login").click(function() {
    $(".form2").css({
        "opacity" : "0",
        "visibility"    : "hidden"
    })
    $(".form1").css({
        "opacity" : "1",
        "visibility"    : "visible"
    })
})





window.onscroll = function() {
    scroll();
  }
  
  function scroll() {
      if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          document.querySelector(".back-to-top").style.right = "2rem";
      }else{
          document.querySelector(".back-to-top").style.right = "-5rem";
      }
  }