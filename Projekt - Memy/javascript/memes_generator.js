let meme = []
let x = 1
let y = 50
let random = 1
for(x; x<=y;x++){
    meme[x-1] = `<img src = "../obrazy/memy/m${x}.jpg" class="img">`
}

function random_num(){
    random = Math.floor(Math.random()*50)
    document.getElementById('g-img').innerHTML = meme[random]
}

random_num()