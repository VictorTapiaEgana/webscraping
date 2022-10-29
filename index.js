const axios = require('axios');
const cheerios = require('cheerio');
const express= require('express');
const cors = require('cors');

const PORT = 3000;
const URL1 = 'https://simple.ripley.cl/tecno/computacion/notebooks?source=menu&page=1&s=mdco';      // Notebook    
const URL2 = 'https://simple.ripley.cl/tecno/television?source=menu&s=mdco';                        // Television           
const URL3 = 'https://simple.ripley.cl/muebles/living-y-sala-de-estar?source=menu&s=mdco';          // Living 
const URL4 = 'https://simple.ripley.cl/deporte-y-aventura/fitness?source=menu&s=mdco';              // Deportes

let HTML ='';

const app = express();
app.use(cors());

app.use(express.static(__dirname + '/src'));
//app.use(express.static(__dirname + '/icon'));

app.get('/notebook',(req,res)=>{
         
        axios(URL1)
            .then(response => {                
                HTML = response.data;      
                const $ = cheerios.load(HTML);    
                let Productos = [];

                    $('.catalog-product-item',HTML).each(function(){

                            const titulo =        $(this).find('.catalog-product-details__name').text();
                            const imagenprev =    $(this).find('img').attr('data-src');              
                            const precio1 =       $(this).find('.catalog-prices__list-price').html();                
                            const precio2 =       $(this).find('.catalog-prices__offer-price').text();
                            const precio3 =       $(this).find('.catalog-prices__card-price').text();
                            var descuento =       $(this).find('.catalog-product-details__discount-tag').html();
            
                            //pasamos en descuento a numero positivo
                             var descuento_Positivo= Math.abs(Number.parseInt(descuento));                
                            //si el descuento tiene un solo caracter( 1,2,3,4,5,6,7,8,9) 
                            //se convierte a 01,02,03,04,05,06,07,08,09
                            if(descuento_Positivo.toString().length === 1){
                                //console.log('Entro : ' + descuento_Positivo)
                                descuento_Positivo = ('-0'+ descuento_Positivo + '%').toString(); 
                                descuento = descuento_Positivo;
                                //console.log(descuento_Positivo);
                            };
                            
                            const link =          $(this).find('a').attr('href');
             
            
                                if (link !== undefined){
                                    var link1 = 'https://simple.ripley.cl' + link;
                                    //console.log(link1);
                                };

                                if (descuento!== null){
                                        Productos.push({titulo,
                                                        imagenprev,
                                                        precio1,
                                                        precio2,
                                                        precio3,
                                                        link1,
                                                    descuento});  
                                                    //console.log(Productos);
                                }                                                                                   
                    });  //fin $  

                    // Eliminar objetos duplicados en el Array
                    // https://es.stackoverflow.com/questions/41202/eliminar-un-array-de-objetos-duplicados-en-javascript/41206
                    let hash = {};
                    Productos = Productos.filter(o => hash[o.titulo] ? false : hash[o.titulo] = true);
                    //console.log("anted del Json : " + Productos)

                
                    res.json(Productos);                    
              

        }).catch(err => {
            console.log('Error: ' + err);    
        });// fin Catch
    

   
});

app.get('/Television',(req,res)=>{
         
    axios(URL2)
        .then(response => {                
            HTML = response.data;      
            const $ = cheerios.load(HTML);    
            let Productos = [];

                $('.catalog-product-item',HTML).each(function(){

                        const titulo =        $(this).find('.catalog-product-details__name').text();
                        const imagenprev =    $(this).find('img').attr('data-src');              
                        const precio1 =       $(this).find('.catalog-prices__list-price').html();                
                        const precio2 =       $(this).find('.catalog-prices__offer-price').text();
                        const precio3 =       $(this).find('.catalog-prices__card-price').text();
                        var descuento =       $(this).find('.catalog-product-details__discount-tag').html();
        
                        //pasamos en descuento a numero positivo
                         var descuento_Positivo= Math.abs(Number.parseInt(descuento));                
                        //si el descuento tiene un solo caracter( 1,2,3,4,5,6,7,8,9) 
                        //se convierte a 01,02,03,04,05,06,07,08,09
                        if(descuento_Positivo.toString().length === 1){
                            //console.log('Entro : ' + descuento_Positivo)
                            descuento_Positivo = ('-0'+ descuento_Positivo + '%').toString(); 
                            descuento = descuento_Positivo;
                            //console.log(descuento_Positivo);
                        };
                        
                        const link =          $(this).find('a').attr('href');
         
        
                            if (link !== undefined){
                                var link1 = 'https://simple.ripley.cl' + link;
                                //console.log(link1);
                            };

                            if (descuento!== null){
                                    Productos.push({titulo,
                                                    imagenprev,
                                                    precio1,
                                                    precio2,
                                                    precio3,
                                                    link1,
                                                descuento});  
                                                //console.log(Productos);
                            }                                                                                   
                });  //fin $  

                // Eliminar objetos duplicados en el Array
                // https://es.stackoverflow.com/questions/41202/eliminar-un-array-de-objetos-duplicados-en-javascript/41206
                let hash = {};
                Productos = Productos.filter(o => hash[o.titulo] ? false : hash[o.titulo] = true);
                //console.log("anted del Json : " + Productos)

            
                res.json(Productos);                    
          

    }).catch(err => {
        console.log('Error: ' + err);    
    });// fin Catch



});

app.get('/living',(req,res)=>{
         
    axios(URL3)
        .then(response => {                
            HTML = response.data;      
            const $ = cheerios.load(HTML);    
            let Productos = [];

                $('.catalog-product-item',HTML).each(function(){

                        const titulo =        $(this).find('.catalog-product-details__name').text();
                        const imagenprev =    $(this).find('img').attr('data-src');              
                        const precio1 =       $(this).find('.catalog-prices__list-price').html();                
                        const precio2 =       $(this).find('.catalog-prices__offer-price').text();
                        const precio3 =       $(this).find('.catalog-prices__card-price').text();
                        var descuento =       $(this).find('.catalog-product-details__discount-tag').html();
        
                        //pasamos en descuento a numero positivo
                         var descuento_Positivo= Math.abs(Number.parseInt(descuento));                
                        //si el descuento tiene un solo caracter( 1,2,3,4,5,6,7,8,9) 
                        //se convierte a 01,02,03,04,05,06,07,08,09
                        if(descuento_Positivo.toString().length === 1){
                            //console.log('Entro : ' + descuento_Positivo)
                            descuento_Positivo = ('-0'+ descuento_Positivo + '%').toString(); 
                            descuento = descuento_Positivo;
                            //console.log(descuento_Positivo);
                        };
                        
                        const link =          $(this).find('a').attr('href');
         
        
                            if (link !== undefined){
                                var link1 = 'https://simple.ripley.cl' + link;
                                //console.log(link1);
                            };

                            if (descuento!== null){
                                    Productos.push({titulo,
                                                    imagenprev,
                                                    precio1,
                                                    precio2,
                                                    precio3,
                                                    link1,
                                                descuento});  
                                                //console.log(Productos);
                            }                                                                                   
                });  //fin $  

                // Eliminar objetos duplicados en el Array
                // https://es.stackoverflow.com/questions/41202/eliminar-un-array-de-objetos-duplicados-en-javascript/41206
                let hash = {};
                Productos = Productos.filter(o => hash[o.titulo] ? false : hash[o.titulo] = true);
                //console.log("anted del Json : " + Productos)

            
                res.json(Productos);                    
          

    }).catch(err => {
        console.log('Error: ' + err);    
    });// fin Catch

});

app.get('/deportes',(req,res)=>{
         
    axios(URL4)
        .then(response => {                
            HTML = response.data;      
            const $ = cheerios.load(HTML);    
            let Productos = [];

                $('.catalog-product-item',HTML).each(function(){

                        const titulo =        $(this).find('.catalog-product-details__name').text();
                        const imagenprev =    $(this).find('img').attr('data-src');              
                        const precio1 =       $(this).find('.catalog-prices__list-price').html();                
                        const precio2 =       $(this).find('.catalog-prices__offer-price').text();
                        const precio3 =       $(this).find('.catalog-prices__card-price').text();
                        var descuento =       $(this).find('.catalog-product-details__discount-tag').html();
        
                        //pasamos en descuento a numero positivo
                         var descuento_Positivo= Math.abs(Number.parseInt(descuento));                
                        //si el descuento tiene un solo caracter( 1,2,3,4,5,6,7,8,9) 
                        //se convierte a 01,02,03,04,05,06,07,08,09
                        if(descuento_Positivo.toString().length === 1){
                            //console.log('Entro : ' + descuento_Positivo)
                            descuento_Positivo = ('-0'+ descuento_Positivo + '%').toString(); 
                            descuento = descuento_Positivo;
                            //console.log(descuento_Positivo);
                        };
                        
                        const link =          $(this).find('a').attr('href');
         
        
                            if (link !== undefined){
                                var link1 = 'https://simple.ripley.cl' + link;
                                //console.log(link1);
                            };

                            if (descuento!== null){
                                    Productos.push({titulo,
                                                    imagenprev,
                                                    precio1,
                                                    precio2,
                                                    precio3,
                                                    link1,
                                                descuento});  
                                                //console.log(Productos);
                            }                                                                                   
                });  //fin $  

                // Eliminar objetos duplicados en el Array
                // https://es.stackoverflow.com/questions/41202/eliminar-un-array-de-objetos-duplicados-en-javascript/41206
                let hash = {};
                Productos = Productos.filter(o => hash[o.titulo] ? false : hash[o.titulo] = true);
                //console.log("anted del Json : " + Productos)

            
                res.json(Productos);                    
          

    }).catch(err => {
        console.log('Error: ' + err);    
    });// fin Catch

});

app.get('/estado', (req, res)=> {  
    
    res.send('Servidor Corriendo !!!');   
        
});  







//app.set('port',process.env.PORT || 8000);

app.listen(PORT,() => console.log(`Servidor corriendo en ${PORT}`));


