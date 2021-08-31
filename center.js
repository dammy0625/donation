const lis = document.querySelectorAll("li")
const modal = document.querySelector(".modal")
const line = document.querySelector(".tono")
const number = document.querySelector(".numb")
const imag = document.querySelector(".image")


window.onload=()=>{
    imag.classList.add("imag")
}

lis.forEach((li)=>{
li.onclick=()=>{
    modal.style.cssText = "display:flex;"
    line.innerText = li.childNodes[1].textContent

    if(li.childNodes[2].textContent === "ago palace way"){
number.innerText = '09050693876'
    }else if(li.childNodes[2].textContent === "badagry"){
        number.innerText = '09025140408'
    }else if(li.childNodes[2].textContent === "ifako bariga"){
        number.innerText = '08078357250'
    }else if(li.childNodes[2].textContent === "idi araba"){
        number.innerText = '08084903648'
    }else if(li.childNodes[2].textContent === "ojuelegba / surulere"){
        number.innerText = '08125840448'
    }else if(li.childNodes[2].textContent === "onipanu"){
        number.innerText = '08022930328'
    }else if(li.childNodes[2].textContent === "magodo / ikeja"){
        number.innerText = '08167429405'
    }else if(li.childNodes[2].textContent === "ketu alapere"){
        number.innerText = '08183332272 '
    }else if(li.childNodes[2].textContent === "ikorodu mile 12"){
        number.innerText = '08183593953 '
    }else if(li.childNodes[2].textContent === "lekki"){
        number.innerText = '08065424342 '
    }else if(li.childNodes[2].textContent === "ketu"){
        number.innerText = '07060535322 '
    }else if(li.childNodes[2].textContent === "shomolu"){
        number.innerText = '07033765796 '
    }else if(li.childNodes[2].textContent === "surulere"){
        number.innerText = '08138244603 '
    }else if(li.childNodes[2].textContent === "unilag"){
        number.innerText = '08115215770 '
    }
    else{
        number.innerText = '08084812103'
    }
};

})

modal.onclick=()=>{
    modal.style.cssText = "display:none;"
}