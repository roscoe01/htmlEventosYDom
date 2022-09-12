let color = document.getElementById("color");
let fondo = document.getElementById("fondo-color");
let boton = document.getElementById("boton");

boton.addEventListener('click', () => {
    switch (color.value) {
        case 'rojo':
            fondo.style.backgroundColor = "red";
            color.value= '';
            break;
        case 'azul':
            fondo.style.backgroundColor = "blue";
            color.value= '';
            break;
        case 'violeta':
            fondo.style.backgroundColor = "purple";
            color.value= '';
            break;
        case 'celeste':
            fondo.style.backgroundColor = "lightskyblue";
            color.value= '';
            break;
        case 'verde':
            fondo.style.backgroundColor = "green";
            color.value= '';
            break;
        case 'amarillo':
            fondo.style.backgroundColor = "yellow";
            color.value= '';
            break;
        case 'naranja':
            fondo.style.backgroundColor = "orange";
            color.value= '';
            break;  
        default:
            break;
    }
});