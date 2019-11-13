var cUl = document.querySelector('.cx_main ul')
var cLi = document.querySelector('.cx_main ul li')


console.log(6333)
var n = 0
cUl.onclick = function (e) {
    n++
    
    var cli = e.target;
    if(cli==cUl){
        n--
    }else{
    if (n > 1) {
        last.style.borderBottom = null;
    }
    cli.style.borderBottom = '2px solid #FF6700';
    last = cli
}}
console.log(6666)