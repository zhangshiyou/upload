/**
 * Created by Auser on 2016/6/22.
 */
var n=0, t,count;
var span=$('.head-box-ctrl span');
var currMenu=$(".menu-list").find("li a")
count=$(".head-box").length;
$('.head-box').fadeOut().eq(n).fadeIn();
function moveAuto(){
    n=n>=(count-1)?0:++n;
    $('.head-box').fadeOut().eq(n).fadeIn();
    if(n==2){
        $(".top-bar-con").find("h3").find("img").attr("src","images/logo_2.png");
        currMenu.addClass("after");
    }else{
       $(".top-bar-con").find("h3").find("img").attr("src","images/w_logo.png");
        $(".menu-list").mouseover(function(){$(".top-bar-con").find("h3").find("img").attr("src","images/logo_2.png")})
        currMenu.removeClass("after");
    }
    span.removeClass('active-span').eq(n).addClass('active-span');
    span.addClass("siling").eq(n).removeClass("siling")

}
function dianji (){
    span.click(function(){
        n=$(this).index();
        if(n==2){
            currMenu.addClass("after");
        }else{
            currMenu.removeClass("after");
        }
        $(this).parent().children().removeClass('active-span').eq(n).addClass('active-span');
        $('.head-box').fadeOut().eq($(this).index()).fadeIn();
        clearInterval(t);
    })
}
function ddd(){
    $(".dl-del >li>a.ios_del").hover(function(){
        $(this).html("<span>IOS版</span><span>扫描二维码下载APP</span>")
    },function(){
        $(this).html("<span>IOS版</span><span>手机端APP Store搜索艺考升</span>")
    });
    $(".dl-del >li>a.android_del").hover(function(){
        $(this).html("<span>Android版</span><span>扫描二维码下载APP</span>")
    },function(){
        $(this).html("<span>Android版</span><span>到手机软件市场搜索艺考升</span>")
    });
    $(".dl-del >li>a.web_del").hover(function(){
        $(this).html("<span>艺考升网页版</span><span>点击直接登录</span>")
    },function(){
        $(this).html("<span>艺考升网页版</span> <span>跨平台登录</span> <span>支持多种浏览器平台登录到艺考升</span>")
    })
}
$(function() {
    t = setInterval('moveAuto()', 3000);
    dianji();
    $('.head-box-ctrl').hover(function(){clearInterval(t)},function(){t=setInterval('moveAuto()',3000)});
    ddd();
    //元素坐标
    var X = $('.menu-list').offset().top;
    var Y = $('.menu-list').offset().left;
    console.log(X+":"+Y)
    //鼠标坐标
    $('.menu-list').mousemove(function(e){
        var M= e.pageX;
        var W= e.pageY;
        console.log(M+":"+W)
    })


})
