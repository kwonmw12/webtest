//횡이동 
// $(document).ready(function(){
//   setInterval(function(){
//     $('.swiper-wrapper').animate({"marginLeft":-1200},400, function(){
//       $(this).find('.swiper-slide').eq(0).appendTo($(this)) //find는 자식잡는것, appendTo는 자리바꾸는것 
//       $(this).css({"marginLeft":0})
//     })
//   }, 3000)
// })

//종이동
$(document).ready(function(){
  setInterval(function(){
    $('.swiper-wrapper').animate({"marginTop":-350},400, function(){
      $(this).find('.swiper-slide').eq(0).appendTo($(this)) //find는 자식잡는것, appendTo는 자리바꾸는것 
      $(this).css({"marginTop":0})
    })
  }, 3000)
})