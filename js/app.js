const menu = document.querySelector('.principal');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnnikes = document.querySelector('.nikes');
const btnadidas = document.querySelector('.adidas');
const btnconverse = document.querySelector('.converse');
const btnespecialess = document.querySelector('.especialess');
const contenedortenis = document.querySelector('.tenis');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    tenis();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
}


const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const tenis = () =>{
    let tenisArreglo = [];
    const tenis = document.querySelectorAll('.sneakers');

    tenis.forEach(sneakers=> tenisArreglo = [...tenisArreglo,sneakers]);

    const nikes = tenisArreglo.filter(nike=> nike.getAttribute('data-tenis') === 'nike');
    const adidass = tenisArreglo.filter(adidas => adidas.getAttribute('data-tenis') === 'adidas');
    const converses = tenisArreglo.filter(converse => converse.getAttribute('data-tenis') === 'converse');
    const especialess = tenisArreglo.filter(especiales=> especiales.getAttribute('data-tenis') === 'especiales');

    mostrartenis(nikes, adidass, converses, especialess, tenisArreglo);

}

const mostrartenis = (nikes, adidass, converses, especialess, todos) =>{
    btnnikes.addEventListener('click', ()=>{
        limpiarHtml(contenedortenis);
        nikes.forEach(nike=> contenedortenis.appendChild(nike));
    });

    btnadidas.addEventListener('click', ()=>{
        limpiarHtml(contenedortenis);
        adidass.forEach(adidas=> contenedortenis.appendChild(adidas));
    });

    btnconverse.addEventListener('click', ()=>{
        limpiarHtml(contenedortenis);
        converses.forEach(converse=> contenedortenis.appendChild(converse));
    });
    btnespecialess.addEventListener('click', ()=>{
        limpiarHtml(contenedortenis);
        especialess.forEach(especiales=> contenedortenis.appendChild(especiales));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedortenis);
        todos.forEach(todo=> contenedortenis.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}


