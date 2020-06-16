$(function(){
    var index=0;
    var timer=null;
    $(".buttons span").click(function(){
        index=$(this).index();
        $(".lunbo-box img").eq(index).fadeIn(300).siblings().fadeOut(300);
        $(".buttons span").eq(index).addClass("selected").siblings().removeClass("selected");
    })
    timer=setInterval(function(){
        index++;
        if(index>5){
            index=0;
        }
        $(".buttons span").eq(index).trigger("click");
    },4000)
})