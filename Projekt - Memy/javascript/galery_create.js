let images = []
let x = 1
let y = 49

let columns = 7
let rows = 7
let first_c = 1
let first_r = 1
let row = []
let icons = ""
let z = 0
for(x; x<=49; x++){
    images[x-1] = `<img src = "../obrazy/memy/m${x}.jpg" class="img">`
}

function galeria(){
    for(first_r; first_r <= rows; first_r++){
        for(first_c; first_c <= columns; first_c++){
            if(z == 1){
            row[first_r] = row[first_r] + `<a href='../obrazy/memy/m${first_c+((first_r-1)*columns)}.jpg' title='mem${first_c+((first_r-1)*columns)}.jpg'><img src = '../obrazy/memy/m${first_c+((first_r-1)*columns)}.jpg' class='img-row' id="img-c${first_r}_r${first_c}"></a>`
            } else if(z == 0){
                row[first_r] = `<a href='../obrazy/memy/m${first_c+((first_r-1)*columns)}.jpg' title='mem${first_c+((first_r-1)*columns)}.jpg'><img src = '../obrazy/memy/m${first_c+((first_r-1)*columns)}.jpg' class='img-row' id="img-c${first_r}_r${first_c}"></a>`
                z = 1
            }
        }
        first_c = 1
        icons = icons + `<div class="g-row" id="g-r${first_r}">` + row[first_r] + `</div><div class="g-space" id="g-space${first_r}"></div>`
        row[first_r] = ""
        z = 0
    }
    document.getElementById('g-icons').innerHTML = icons
}
galeria()
