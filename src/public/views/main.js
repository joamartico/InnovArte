
  AOS.init();


//nav al scrollear

var ubicacionVieja = 0

window.addEventListener("scroll", function(){
    let ubicacionNueva = window.pageYOffset
    if(ubicacionNueva >= ubicacionVieja && ubicacionNueva != 0){
        document.getElementsByTagName("nav")[0].style.top = "-100px"
        ubicacionVieja = window.pageYOffset
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "0px"
        ubicacionVieja = window.pageYOffset
    }
})

// menu desplegable
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0]
//?

let menuAbierto = false
let hamburguer = document.querySelectorAll(".hamburguer")[0]

hamburguer.addEventListener("click", function() {
   enlacesHeader.classList.toggle("menudos") 
   menuAbierto = !menuAbierto

   if(menuAbierto === true){
       hamburguer.style.color="#fff"
   }
   else{
       hamburguer.style.color="#000"
   }
})
