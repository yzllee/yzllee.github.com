$(function () {
    function Main() {
        scroll();
        backTop();
    }

    function scroll() {
        $("html").niceScroll({
            //颜色,宽度,圆角,边框,背景
            cursorcolor: "rgb(147, 224, 255)",
            cursorwidth: '7',
            cursorborderradius: '10px',
            cursorborder: '0',
            background: 'rgba(220,220,220,0.9)',
            //防止按空格向下滚动👇
            spacebarenabled: false,
            zindex: 'auto'
        });
    }

    function backTop() {
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1000);
            }
            else {
                $("#back-to-top").fadeOut(1000);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function () {
            $('body,html').animate({scrollTop: 0}, 1000);
            return false;
        });
    }

    Main();
});

                     
     
  