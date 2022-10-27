const Display = document.getElementById('display');
const fragmento = document.createDocumentFragment();
const template = document.querySelector('template').content;
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btninfo = document.getElementById('info');
const btncerrar = document.getElementById('cerrar');
const FLOTANTE= document.getElementById('flotante1');

const URL1 = 'http://localhost:8000/notebook';
const URL2 = 'http://localhost:8000/television';
const URL3 = 'http://localhost:8000/living';
const URL4 = 'http://localhost:8000/deportes';



async function obtenerDatos (direccion){
    try {
        const res = await fetch(direccion);
        const datos = await res.json();

        // console.log(datos);

        llenarTarjetas(datos);


    } catch (error) {
        console.log(error);
    };
};

const llenarTarjetas = data =>{


    var order = data.sort(function(a, b){         
        if (a.descuento > b.descuento) {
        return -1;
        }
      
    });
  
  //console.log(order);
        Display.textContent='';
        data.forEach(element => {
            titulo = element.titulo;
            template.getElementById('titulo').textContent = element.titulo;
            template.getElementById('imagen').setAttribute('src',element.imagenprev);
            template.getElementById('precio1').textContent=element.precio1;
            template.getElementById('precio2').textContent=element.precio2;
            template.getElementById('precio3').textContent=element.precio3;
            template.getElementById('descuento').textContent=element.descuento;
            template.querySelector('a').setAttribute('href',element.link1);


            const clone = template.cloneNode(true);
            fragmento.appendChild(clone);
        });

        Display.appendChild(fragmento);

}

document.addEventListener('DOMContentLoaded', () =>{// se espera a que cargue todo el doumento
    obtenerDatos(URL1);
} );


btn1.addEventListener('click', e =>{
    obtenerDatos(URL1);
    //alert('boton1');
    e.stopPropagation();
});
btn2.addEventListener('click', e =>{
    obtenerDatos(URL2);
    //alert('boton2');
    e.stopPropagation();
});
btn3.addEventListener('click', e =>{
    obtenerDatos(URL3);
    //alert('boton3');
    e.stopPropagation();
});
btn4.addEventListener('click', e =>{
    obtenerDatos(URL4);
    //alert('boton4');
    e.stopPropagation();
});

btninfo.addEventListener('click', e =>{
    FLOTANTE.style = "visibility:visible";   
    e.stopPropagation;
});

btncerrar.addEventListener('click', e =>{
    FLOTANTE.style = "visibility:hidden";   
    e.stopPropagation;
});






