$(function () {
    console.log(999)
    $.ajax({
        //请求方式为get
        type: "GET",
        //json文件位置
        url: "./data/shuju.json",
        //返回数据格式为json
        dataType: "json",
        //请求成功完成后要执行的方法
        success: function (data) {
            //使用$.each方法遍历返回的数据date,插入到id为#result中
            var str = '<span>',
                str1;
            $.each(data.list, function (i, n) {
                str += n["item1"] + "</span>" + "|" + "<span>" + n["item2"] + '</span>';
                str1 =  n["item1"] 
                str2=n["item3"]+"<span>"+n["item03"]+"</span>"
                str3=n["item4"];
                str4="<span>"+n["item6"]+"</span>"+"<i>"+n["item7"]+"</i>"
                str5="<span>"+n["item8"]+"</span>"+"<i>"+n["item9"]+"</i>"
                
                str6="<span>"+n["item10"]+"</span>"+"<i>"+n["item11"]+"</i>"
                
                // str7=n["item9"];
                // str8=n["item10"];
                // str9=n["item11"];



            })
            str += "</span>";
            $(".c_left").html(str);
            $('.c_text>h2').html(str1)
            $('.c_text .c_p1').html(str2)
            $('.c_text .c_p3').html(str3)
            // $('.c_box3 div:eq(0)').html(str4)
            $('.c_box3 div:eq(1)').html(str5)
            $('.c_box3 div:eq(2)').html(str6)
            



           


          
        }
    });
});