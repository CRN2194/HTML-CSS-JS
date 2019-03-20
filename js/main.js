var api='AIzaSyDcLU9IhaWL4p3pnVFPHnz50qwUiMSCGRQ ';

function initMap() {

    var latlng={
        lat:-33.4446592,
        lng:-70.6445312
    };

    var map = new google.maps.Map(document.getElementById('mapa'), {
      center: {lat: -33.4446592, lng: -70.6445312},
      zoom: 14,
      //mapTypeId: google.maps.mapTypeId.SATELLITE
      

    });

    var informacion=new google.maps.InfoWindow({
        content: "Hola mundo"
    });
    var marker= new google.maps.Marker({
        position: latlng,
        map:map,
        title:'holas' 
    });
    marker.addListener('click',function(){
        informacion.open(map,marker);
    });
}

(function(){
    "use strict";
    var regalo=document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded',function(){
 
    //Campos datos usuarios 
    var nombre =document.getElementById('nombre');
    var apellido =document.getElementById('apellido');
    var email =document.getElementById('email');
    //Campos pases
    var pase_dia =document.getElementById('pase_dia');
    var pase_dosdias =document.getElementById('pase_dosdias');
    var pase_completo =document.getElementById('pase_completo');
    //Botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-producto');
    //Extras
    var etiquetas =document.getElementById('etiquetas');
    var camisas=document.getElementById('camisa_evento');
    var suma=document.getElementById('suma-total');

    calcular.addEventListener('click', calcularMontos);
    pase_dia.addEventListener('blur', MostrarDías);
    pase_dosdias.addEventListener('blur', MostrarDías);
    pase_completo.addEventListener('blur',MostrarDías);
    nombre.addEventListener('blur',ValidarCampos);
    apellido.addEventListener('blur',ValidarCampos);
    email.addEventListener('blur',ValidarCampos);
    email.addEventListener('blur',ValidarEmail);

    function ValidarEmail(){
        if (this.value.indexOf("@")>-1) {
            errorDiv.style.display='none'; 
            this.style.border='1px solid #cccccc';
          
            
        }
        else{
            errorDiv.style.display='block';
            errorDiv.innerHTML="Es necesario ingresar un arroba";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';
            
        }
    }

    function ValidarCampos(){
        if(this.value == ''){
            errorDiv.style.display='block';
            errorDiv.innerHTML="Este mensaje es obligatorio";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';
        }
        else{
            errorDiv.style.display='none';
            this.style.border='1px solid #cccccc';
        }
    }

    function calcularMontos(event){
        event.preventDefault();
        if(regalo.value==''){
            alert("Debes elegir un regalo");
            regalo.focus;
        }
        else{
            var boletosdias =parseInt (pase_dia.value,10) || 0;
            var boletos2dias =parseInt (pase_dosdias.value,10) || 0;
            var boletoCompleto =parseInt (pase_completo.value,10) || 0;
            var cantCamisas =parseInt (camisas.value,10) || 0;
            var cantEtiquetas =parseInt (etiquetas.value,10) || 0;

            var totalPagar= (boletosdias *30)+ (boletos2dias*45)+(boletoCompleto* 50) + ((cantCamisas*10)*0.93) +(cantEtiquetas*2); 

            var listadoProductos= [];

            if(boletosdias>=1){
                listadoProductos.push(boletosdias +'Pases por día');
                
            }
            if(boletos2dias>=1){
                listadoProductos.push(boletos2dias +'Pases por 2 días');
                
            }
            if(boletoCompleto>=1){
                
                listadoProductos.push(boletoCompleto +'Pases completo');
            }
            if(cantCamisas>=1){
                
                listadoProductos.push(cantCamisas +'Camisas');
            }
            if(cantEtiquetas>=1){
                
                listadoProductos.push(cantEtiquetas +'Etiquetas');
            }
            lista_productos.style.display="block";
            lista_productos.innerHTML= '';
            for (var i = 0; i < listadoProductos.length; i++) {
                lista_productos.innerHTML += listadoProductos[i]+ '<br/>';
                
            }
            suma.innerHTML="$" +totalPagar.toFixed(2);

            

        }
    }
    function MostrarDías(){
        var boletosdias =parseInt (pase_dia.value,10) || 0;
        var boletos2dias =parseInt (pase_dosdias.value,10) || 0;
        var boletoCompleto =parseInt (pase_completo.value,10) || 0;

        var diasElegidos=[];
        if (boletosdias>=1) {
            diasElegidos.push('viernes');
            
        }
        if (boletos2dias>=1) {
            diasElegidos.push('viernes','sabado');
            
        }
        if (boletoCompleto>=1) {
            diasElegidos.push('viernes','sabado','domingo');
            
        }
        for(var i=0; i < diasElegidos.length; i++){
            document.getElementById(diasElegidos[i]).style.display="block";
        }
    }

    


    }); //Dom content Loader
})();