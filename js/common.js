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
// $(document).ready(function(){
//   setInterval(function(){
//     $('.swiper-wrapper').animate({"marginTop":-350},400, function(){
//       $(this).find('.swiper-slide').eq(0).appendTo($(this)) //find는 자식잡는것, appendTo는 자리바꾸는것 
//       $(this).css({"marginTop":0})
//     })
//   }, 3000)
// })

//페이드방식
$(document).ready(function(){
  var count = 0;
  setInterval(function(){
    count++;
    count %= 3; // 0 1 2 순환 // 3개중에 하나 골라야하니까 eq메서드가 핵심 그리고나서 addClass removeClass로 만진다
    
    // $("#swiper .swiper-slide").eq(count).addClass('action').siblings().removeClass('action');
    //sivlings가 안될경우가 있기때문에 아래식이 더 확실한 식이 되겠다.
    $('#swiper .swiper-slide').removeClass('action')
    $('#swiper .swiper-slide').eq(count).addClass('action')
  }, 3000)
})