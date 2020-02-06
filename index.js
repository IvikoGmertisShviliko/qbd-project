let aante = document.querySelector('.aante');
let off = document.querySelector('.s');
let on = document.querySelector('.a');

off.addEventListener('click', function(){
    aante.src = 'assets/images/color_light_off_lamp-512.png'

})

on.addEventListener('click', function(){
    aante.src = 'assets/images/solid_light_off_lamp-512.png'

})
