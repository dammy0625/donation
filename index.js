const donate= document.querySelector(".intro h2")
var desc= document.querySelector(".desc")
var center= document.querySelector(".center")
var welc= document.querySelector(".welcome")
var donation= document.querySelector(".donation")

donate.onclick=()=>{

    desc.classList.add("show")
    center.classList.add("opp")
    welc.style.cssText="opacity:1;transform: translateY(0);"
    donation.style.cssText="opacity:1;"
}