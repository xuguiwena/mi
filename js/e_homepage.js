$(function() { //自执行

    //判断用户是否登录
    if (localStorage.getItem('user')) { //如果有user缓存，即用户已登录
        $('.denglu').css('display', 'block') //显示登录的状态
        $('.username a').html(localStorage.getItem('user')) //登录页面保存cookie
        $('.login').on('mouseenter', '.denglu', function() {
            $('.dlcg').slideDown(200, 'swing', function() {}) //列表下拉
        });
        $('.login').on('mouseleave', '.denglu', function() {
            $('.dlcg').slideUp(200, 'swing', function() {}) //列表上移
        });
        $('.login').on('click', '.exit', function() { //退出登录
            $('.denglu').css('display', 'none'); //隐藏登录状态
            localStorage.removeItem('user'); //清除cookie
            window.location.reload(); //页面重载->看需求
        })
    } else {
        $('.denglu').css('display', 'none')
    }


    //菜单栏展示
    $('#Nav').on('mouseenter', $('.nav ul .show-li'), function() {
        for (var i = 0; i < $('.nav ul .show-li').length; i++) {
            // console.log($('.nav ul .show-li').length);
            $('.nav ul .show-li').eq(i).hover(function() {
                $('.show').slideDown(200, 'swing', function() {})
            }, function() {
                $('.show').mouseleave(function() {
                    $('.show').slideUp(200, 'swing', function() {})
                });
            });
        }
    });
    $('#Nav').on('mouseleave', $('.nav ul .show-li'), function() {
        $('.show').slideUp(200, 'swing', function() {})
    });

    //二级菜单
    $('.b_menu>ul>li').hover(function() {
            $(this).children().eq(2).css('display', 'block');
        }, function() {
            $(this).children().eq(2).css('display', 'none');
        })
        //右侧固定栏
    window.onscroll = function() {
            var toTop = document.querySelector('.suspend_toTop')
            var scTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scTop >= 900) {
                toTop.style.display = "block";
            } else {
                toTop.style.display = "none";
            }
            toTop.onclick = function() {
                $(window).scrollTop('0');
            }
        }
        //logo转换
    var newImage = new Image(); //预载入图片 
    var oldImage = $('.logo1').attr('src');
    newImage.src = './img/home_page.jpg';
    $('.logo1').hover(function() { //鼠标滑过图片切换 
            $('.logo1').attr('src', newImage.src);
        },
        function() {
            $('.logo1').attr('src', oldImage);
        });

    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: true,
        fadeEffect: {
            crossFade: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //城市切换
    var oSiteLeft = document.querySelector(".siteLeft");
    var oShow = document.querySelector("#show"); //地图标
    var oShow_text = document.querySelector("#show_text"); //显示地区
    var oList_city = document.querySelector(".list_city"); //城市列表父级
    var oList = document.querySelector('#list')
    var lis = oList.children;

    oSiteLeft.onmouseover = function(e) {

        oList_city.style.display = "block";
        oList.onclick = function(e) {

            var ev = window.event || e;
            var target = ev.target || ev.srcElement;

            if (target.nodeName == 'A') {
                oShow_text.innerHTML = target.innerHTML;
                console.log(target.innerHTML);

                oList_city.style.display = 'none';
            }

            if (target.id != 'show_text' && target.id != 'list') {
                oList_city.style.display = 'none';
            }
        }
    };

    oSiteLeft.onmouseout = function() {

        oList_city.style.display = "none";

    };


    //选项卡切换
    $('.jiadian_nav_ul>li').mouseover(function() {
        console.log(666);

        $(this).addClass('jiadian_list').siblings('li').removeClass('jiadian_list');

        var k = $('.jiadian_nav_ul').index($(this).parent());
        var i = $(this).index(); //(0,1,2,3)
        console.log(i, k);

        $('.jiadian_showpic').eq(k).children().eq(i + 1).addClass('jd_selected').siblings('div').removeClass('jd_selected');
    });

    //闪购点击切换
    // var i = 0;
    // var len = $('.sgtwo2_li').length / 4;
    // $('.btn_r').click(function() { //点击右键
    //     i++;

    //     if (i <= len) {
    //         $('.btn_l').css('color', '#323232');
    //         $('.sgtwo2_li').css("left", (-(i * 1010)) + 'px')
    //     }
    //     if (i >= len) {
    //         i = len - 1;
    //         $('.sgtwo2_li').css("left", (-(i * 1010)) + 'px');
    //         $('.btn_l').css('color', '#e0e0e0');
    //     }
    // })

    // $('.btn_l').click(function() { //点击左键

    //     if (i > 0) {
    //         $('.btn_r').css('color', '#323232');
    //         i--;
    //         $('.sgtwo2_li').css("left", (-(i * 1010)) + 'px')
    //     } else {
    //         $('.btn_r').css('color', '#e0e0e0');
    //     }

    // })



})