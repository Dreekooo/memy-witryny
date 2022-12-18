let lista = []
let l0 = 0
let l1 = 1
let l2 = 50
let l3 = 8
let m = 0
let x = 1
let y = 6

for(l1; l1 <= l3; l1++){
    l0 = Math.floor(Math.random()*l2+1)
    if(l0 == lista[0] || l0 == lista[1] || l0 == lista[2] || l0 == lista[3] || l0 == lista[4] || l0 == lista[5] || l0 == lista[6] || l0 == lista[7]){
        l1 = l1 - 1
    } else {
    lista[l1-1] = l0
    }
}   


    
    function turniej(win){
        document.getElementById('t-machine').innerHTML = `<div id="t-f-imgs"><div id="t-f1"><img src="../obrazy/memy/m${lista[win]}.jpg" class="t-img"></div><div id="t-f2"><img src="../obrazy/memy/m${lista[x]}.jpg" class="t-img"</div></div><div id="t-f-btns"><div id="t-f-btn1" onclick="f1_win${win}()">ZAGŁOSUJ</div><div id="t-f-btn2" onclick="f1_win${x}()">ZAGŁOSUJ</div></div>`
    }
    function f1_win0(){
        m = 0
        x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win1(){
        m = 1
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win2(){
        m = 2
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win3(){
        m = 3
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win4(){
        m = 4
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win5(){
        m = 5
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win6(){
        m = 6
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function f1_win7(){
        m = 7
                x++
        if(x <= 7){
        turniej(m)
        } else{
        win(m)
        }
    }
    function win(win){
        document.getElementById('t-machine').innerHTML = `<h4>OTO WYGRANY!</h4><img src="../obrazy/memy/m${lista[win]}.jpg" class="t-img">`
    }