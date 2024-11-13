$(function () {
    var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
    $(window).scroll(function () {
            var t = $(document).scrollTop();
            t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1,
                $(".level-2").css("opacity", 1), e.delay(100).animate({
                        marginTop: "-1000px"
                    },
                    "normal",
                    function () {
                        e.css({
                                "margin-top": "-125px",
                                display: "none"
                            }),
                            i = !0
                    })) : e.fadeIn("slow")
        }),
        e.hover(function () {
                $(".level-2").stop(!0).animate({
                    opacity: 1
                })
            },
            function () {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
        $(".level-3").click(function () {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                        e.css("background-position", "0px 0px");
                    return
                }
                switch (t) {
                    case "0px 0px":
                        e.css("background-position", "-298px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
                $("html,body").animate({
                    scrollTop: 0
                }, "slow");
        });
});

function show() {
    //创建内置Date对象
    var date = new Date();
    //获取当前年份
    var year = date.getFullYear();
    //获取当前的月份,范围是0-11
    var month = date.getMonth() + 1;
    //获取该月的第几天
    var day = date.getDate();
    //getDay方法获取当前是这个星期的第几天范围是0-6
    //周日对应0，123456分别是对应的星期几
    var week = "日一二三四五六".charAt(date.getDay());
    //获取当前小时分钟和秒
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //选择id为time的标签
    var element = document.getElementById("time");
    element.innerHTML = year + "年" + month + "月" + day + "日" + "	" + "星期" + week + "	" + hour + "时" + minute + "分" + second + "秒";
}
show();
//每间隔1000毫秒执行一次程序，保证时间动态显示
setInterval("show()", 1000);
