// variables de el slider
let sliderAimado = document.querySelector('.contenedor-slider')
let sliderSolo = document.querySelectorAll('.contenido-slider')
let contador = 1
let width = sliderSolo[0].clientWidth
let intervalo = 3000

// variable para la animacion del scroll
let ubicacion = window.pageYOffset

// animaciones del scroll  
window,addEventListener('scroll' ,function(){
    AOS.init();
    let posicion = window.pageYOffset

    console.log(window.pageYOffset)
    
    ubicacion = posicion
})

// slider
window,addEventListener('resize' , function(){})

width = sliderSolo[0].clientWidth

        setInterval(function(){
            animarSlider()
        },intervalo)

function animarSlider(){
    sliderAimado.style.transform = "translate("+(-width*contador)+"px)"
    sliderAimado.style.transition = "transform .8s"
    contador++

    if(contador = sliderSolo.length){
        setTimeout(function(){
            sliderAimado.style.transform = "translate(0px)"
            sliderAimado.style.transition = "transform 0s"
            contador = 1
        },1500)
    }
}