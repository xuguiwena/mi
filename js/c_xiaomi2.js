$(document).scroll(function () {
    var c_img = document.querySelector('.c_img')
    var c_text = document.querySelector('.c_text')
    var res = c_text.clientHeight - c_img.clientHeight
    if (Math.ceil(scrollY) <= res) {
        c_img.style.marginTop = Math.ceil(scrollY) + 'px';
    }
    if (scrollY > 200) {
        $("#c_nav2").slideDown("slow");
        console.log(666)
    } else {
        $("#c_nav2").slideUp("slow");
    }
});