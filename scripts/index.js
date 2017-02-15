
var helpCenter={
    init:function(){
        this.bindEvent();
    },
    bindEvent:function(){
        var hei=$(window).height();
        $(".problem").css("minHeight",hei-85);
        var Url=window.location.href;
        var page=Url.substring(0,Url.lastIndexOf(".html"));
        var curHref=page.substring(Url.lastIndexOf("/")+1);

        $(".fir-ul a").each(function(idx,ele){
            if(!curHref){
                return;
            }
            var curPage=$(this).attr("href");
            if(curPage.indexOf(curHref)>-1){
                $(this).addClass("curr-menu").siblings('i').addClass('border-cur');
            }
        });        
    }
};
helpCenter.init();
