const random1 = Math.floor(Math.random()*6)+1
const random2 = Math.floor(Math.random()*6)+1

const img1url = `./images/dice${random1}.png`
const img2url = `./images/dice${random2}.png`



function winer(){
    image()
    if(random1 === random2){
        document.getElementById('ans').innerHTML = 'Drow'
    }
    else if(random1 > random2){
        document.getElementById('ans').innerHTML = 'Player 1 wins'
    }
    else if(random2 > random1){
        document.getElementById('ans').innerHTML = "PLayer 2 wins"
    }
}

winer()


function image(){
    document.getElementById('img1').src = img1url
    document.getElementById('img2').src = img2url
}


function refreshPage(){window.location.reload()}


