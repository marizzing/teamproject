let cnt=0
let prev=$('.icon i:first-child')
let next=$('.icon i:last-child')


next.click(function(e){
    e.preventDefault()
    prev.fadeIn('on')
    cnt++;


}) 





$("ul.sideBtn li").click(function () {
    $("ul.sideBtn li").removeClass("on");
    $(this).addClass("on");
    let liIdx = $(this).index();
    $(".store ul").fadeOut();
    $(".store ul").eq(liIdx).fadeIn();
  

  });