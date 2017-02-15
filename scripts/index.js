/**
 * Created by Auser on 2016/6/22.
 */
function topLihover(){
    $(".menu-list>li").hover(function(){
        $(this).find("ol").slideDown();
        $(this).parents("div.top-bar").css("background","#fff");
        $(this).find("a").css("color","#019FE8");
        $(this).siblings().find("a").css("color","#757575");
        $(".guck").show();
        $(".wrap .top-bar .top-bar-con .menu-list li .subMenu li").animate({
            marginLeft:20,
        },500)
    },function(){
        $(this).find("ol").hide();
        $(this).parents("div.top-bar").css("background","transparent");
        $(this).find("a").css("color","#fff");
        $(this).siblings().find("a").css("color","#fff");
        $(".guck").hide()
        $(".wrap .top-bar .top-bar-con .menu-list li .subMenu li").css("marginLeft","1000%")
    })
}
function tab(){
    $(".join-us ul li").hover(function(){
        $(this).css("borderBottom","6px solid #3395E5");
        $(this).siblings().children().hide();
        $(this).children().show();
    },function(){
        $(this).css("borderBottom","6px solid #F6F6F6")
    })
}
$(function(){
    topLihover();
    tab();
})