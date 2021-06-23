// Contato menu
let ghost = document.getElementById('ghost')

var ghost_disable = () =>{
    ghost.style.display = "none";
}
var ghost_enable = () =>{ghost.style.display = "block";}


function show_ghost(){
    document.body.style.overflow = "hidden"
    ghost_enable()
}
function hidden_ghost(){
    document.body.style.overflow = "auto"
    ghost_disable()
}

// Portifólio
let square = document.getElementsByClassName('square')

for (var item = 0; item < square.length; item++){
    square[item].addEventListener('mouseover', show_square)
    square[item].addEventListener('mouseout', hidden_square)
}

function show_square(){
   let link = this.children[1]
   link.style.gridRow = '1/3'
   link.children[0].style.fontSize = "2.6rem"
   link.children[0].style.marginTop = "30px"
   link.children[1].style.display = "block"
}
function hidden_square(){
    let link = this.children[1]
    link.style.gridRow = '2/3'
    link.children[0].style.fontSize = "2.0rem"
    link.children[0].style.marginTop = "0px"
    link.children[1].style.display = "none"
 }