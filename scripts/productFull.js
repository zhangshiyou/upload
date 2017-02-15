/**
 * Created by Auser on 2016/6/24.
 */
$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#000', '#fff', '#fff', '#fff'],
        'navigation': true,
        continuousVertical: true,
        afterLoad: function(anchorLink ,index){
            var Url=location.href;
            var r=Url.substring(Url.lastIndexOf("/")+1)
            var f="product.html"
            var curPage= f.lastIndexOf(Url);
            switch (index){
                case 1:
                    $('.logo_pic').find("img").attr("src","images/w_logo.png");
                    $(".menu-list").find("li a").removeClass("after");
                    break;
                case 2:
                    $('.logo_pic').find("img").attr("src","images/logo_2.png");
                    $(".menu-list").find("li a").each(function(idx,ele){
                        if($(this).attr("href")==f){
                            $(this).removeClass("after")
                        }else{
                            $(this).addClass("after");
                        }
                    });
                    break;
                case 3:
                    $(".menu-list").find("li a").removeClass("after");
                    break;
            }
        },
    });
    setInterval(function(){
        $.fn.fullpage.moveSectionDown();
    }, 5000);
});