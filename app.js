

var bod=document.getElementById("body").style.display="none"
var loade=document.getElementById("loader").style.display="block"


function bo(){
        document.getElementById("none").style.opacity="700px"
    document.getElementById("none").style.display="none"

    document.getElementById("body").style.display="block"
}
setTimeout(bo,2400)


var num=1;




window.addEventListener("scroll",()=> {
    var navba=document.getElementById('navb');
    var ul=document.getElementById("ul")
    // var u1=document.getElementById("u1")
    // var u2=document.getElementById("u2")
    // var u3=document.getElementById("u3")
    // var u4=document.getElementById("u4")
    // var u5=document.getElementById("u5")
    // var u6=document.getElementById("u6")
    // var u7=document.getElementById("u7")/
    console.log(window.scrollY)
    if (window.scrollY > 200) {
        navba.classList.add("fixe")
// ul.classList.add("whi")
// u1.classList.add("whi")
// u2.classList.add("whi")
// u3.classList.add("whi")
// u4.classList.add("whi")
// u5.classList.add("whi")
// u6.classList.add("whi")
// u7.classList.add("whi")

        } else {
            navba.classList.remove("fixe")
            // ul.classList.add("whi")
u1.classList.remove("whi")
u2.classList.remove("whi")
u3.classList.remove("whi")
u4.classList.remove("whi")
u5.classList.remove("whi")
u6.classList.remove("whi")
u7.classList.remove("whi")
    }
})

document.getElementById("send").addEventListener("click",()=>{
    alert("Your message has successfully reached the admin ")
})