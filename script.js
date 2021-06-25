

// Contato menu
let ghost = document.getElementsByClassName('ghost')[0]
let main = document.getElementsByTagName('main')[0]
let teste = false

var ghost_disable = () =>{
    document.body.style.backgroundColor = "whitesmoke"
    main.style.display = "block";
    ghost.style.display = "none";
}
var ghost_enable = () =>{
    document.body.style.backgroundColor = "#222f3e"
    main.style.display = "none";
    ghost.style.display = "block";
}
function show_ghost(){   
    animation()
    document.body.style.overflow = "hidden"
    ghost_enable()
}
function hidden_ghost(){
    animation()
    document.body.style.overflow = "auto"
    setTimeout(() => {
        ghost_disable()
    }, 600);
}
function animation(){
    ghost.classList.toggle('off', teste)
    teste = !teste
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
   link.children[0].style.display = "none"
   link.children[1].style.display = "block"
}
function hidden_square(){
    let link = this.children[1]
    link.style.gridRow = '2/3'
    link.children[0].style.display = "block"
    link.children[1].style.display = "none"
 }

 // Menu toggle

 var show = true
 var menu = document.querySelector('.menu_section')
 var btn = document.querySelector('.toggle')
 var ul = document.getElementById('ul_menu')

 btn.addEventListener('click', () =>{
    document.body.style.overflow = show ? "hidden" : "initial"
    menu.classList.toggle('on', show)
    show = !show
 })
for (var li = 0; li < ul.children.length; li++){
    ul.children[li].addEventListener('click', () =>{
        document.body.style.overflow = "initial"
        menu.setAttribute('class', "menu_section")
        show = !show
    })
}
