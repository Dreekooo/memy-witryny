let memes_div = document.getElementById("memes-img").innerHTML
let site_number = 1
let div_num = 1
let site_num = 1
let sort = 1

let btn1 = document.getElementById("s-number-2")
let btn2 = document.getElementById("s-number-1")
let btn3 = document.getElementById("s-number0")
let btn4 = document.getElementById("s-number1")
let btn5 = document.getElementById("s-number2")

function new_sort(site, sort){
    memes_div = ""

    if(sort == 1){
        div_num = 1
        for(div_num; div_num <=10; div_num++){
            memes_div = memes_div + `<div class = "memes-meme-div"><img src = "../obrazy/memy/m${div_num+((site-1)*10)}.jpg" class="img"></div>`
        }
    } else if(sort == 2){
        div_num = 10
        for(div_num; div_num >=1; div_num--){
            memes_div = memes_div + `<div class = "memes-meme-div"><img src = "../obrazy/memy/m${div_num+((5-site)*10)}.jpg" class="img"></div>`
        }
    }
    document.getElementById("memes-img").innerHTML = memes_div
}


function style_none(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
    img1.style.filter = 'none'
    }
}
function style_saturation(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
        img1.style.filter = 'none'
    }
    for(let img1 of img){
    img1.style.filter = 'saturate(300%)'
    }
}
function style_hue(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
        img1.style.filter = 'none'
    }
    for(let img1 of img){
    img1.style.filter = 'hue-rotate(90deg)'
    }
}
function style_contrast(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
        img1.style.filter = 'none'
    }
    for(let img1 of img){
    img1.style.filter = 'contrast(200%)'
    }
}
function style_invert(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
        img1.style.filter = 'none'
    }
    for(let img1 of img){
    img1.style.filter = 'invert(100%)'
    }
}
function style_black(){
    img = document.getElementsByClassName('img')
    for(let img1 of img){
        img1.style.filter = 'none'
    }
    for(let img1 of img){
    img1.style.filter = 'grayscale(100%)'
    }
}




function btn_style(site_num){
    if(site_num == 1){
        btn1.style.backgroundColor = "#4BA2EA"
        btn2.style.backgroundColor = "rgb(0, 0, 75)"
        btn3.style.backgroundColor = "rgb(0, 0, 75)"
        btn4.style.backgroundColor = "rgb(0, 0, 75)"
        btn5.style.backgroundColor = "rgb(0, 0, 75)"
    } else if(site_num == 2){
        btn1.style.backgroundColor = "rgb(0, 0, 75)"
        btn3.style.backgroundColor = "rgb(0, 0, 75)"
        btn4.style.backgroundColor = "rgb(0, 0, 75)"
        btn5.style.backgroundColor = "rgb(0, 0, 75)"
        btn2.style.backgroundColor = "#4BA2EA"
    } else if(site_num == 3){
        btn3.style.backgroundColor = "#4BA2EA"
        btn1.style.backgroundColor = "rgb(0, 0, 75)"
        btn2.style.backgroundColor = "rgb(0, 0, 75)"
        btn4.style.backgroundColor = "rgb(0, 0, 75)"
        btn5.style.backgroundColor = "rgb(0, 0, 75)"
    } else if(site_num == 4){
        btn4.style.backgroundColor = "#4BA2EA"
        btn1.style.backgroundColor = "rgb(0, 0, 75)"
        btn2.style.backgroundColor = "rgb(0, 0, 75)"
        btn3.style.backgroundColor = "rgb(0, 0, 75)"
        btn5.style.backgroundColor = "rgb(0, 0, 75)"
    } else if(site_num == 5){
        btn5.style.backgroundColor = "#4BA2EA"
        btn1.style.backgroundColor = "rgb(0, 0, 75)"
        btn2.style.backgroundColor = "rgb(0, 0, 75)"
        btn3.style.backgroundColor = "rgb(0, 0, 75)"
        btn4.style.backgroundColor = "rgb(0, 0, 75)"
    }
}

function sort_as_new(){
    sort = 1
    new_sort(site_num, sort)
    btn_style(site_num)
}
function sort_as_old(){
    sort = 2
    new_sort(site_num, sort)
    btn_style(site_num)
}

function site_num1(){
    site_num = 1
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_num2(){
    site_num = 2
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_num3(){
    site_num = 3
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_num4(){
    site_num = 4
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_num5(){
    site_num = 5
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_less(){
    if(site_num > 1){
    site_num = site_num - 1
    } else {
        site_num = 1
    }
    new_sort(site_num, sort)
    btn_style(site_num)
}
function site_more(){
    if(site_num < 5){
    site_num = site_num + 1
    } else {
    site_num = 5
    }
    new_sort(site_num, sort)
    btn_style(site_num)
}

site_num1()