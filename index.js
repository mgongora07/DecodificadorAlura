
var checkbox=document.getElementById('checkboxClase')
var elemento=document.getElementById('contenedor')
var parrafo=document.getElementById('parrafo')
var resultado=document.getElementById('resultado')

//var control="false"


const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


checkbox.addEventListener('change', function() {
        elemento.classList.toggle("darkmode")
        parrafo.classList.toggle("darkmode")
        resultado.classList.toggle("darkmode")
        mensaje.classList.toggle("darkmode")
        mensajeRespuesta.classList.toggle("darkmode")
    }) 

let oscuro=document.getElementById("checkboxClase")
let label=document.getElementById("label_change")
let etiqueta=document.getElementById("etiqueta_claro")
oscuro.addEventListener("change",(event)=>{
    let checked=event.target.checked
    if(checked==true){
        label.innerHTML='<i class="fa-solid fa-sun"></i>'
        etiqueta.textContent="Claro"
    }else{
        label.innerHTML='<i class="fa-solid fa-moon"></i>'  
        etiqueta.textContent="Oscuro"
    }
})

function validarTexto(){
    var texto=document.getElementById("parrafo").value
    var regex1 = /^[a-z\s]+$/;
    if (!regex1.test(texto)) {
        alert('El texto no cumple con la restricción de solo minúsculas y sin acentos.');
     }
}

function encriptar() {
    var texto=document.getElementById("parrafo").value
    if(texto.length>0){
    var regex = /^[a-z]+$/;
    var control="" 
      // Dividir el texto en palabras usando el espacio como separador
      var palabras = texto.split(/\s+/);

      // Iterar por cada palabra
      for (var i = 0; i < palabras.length; i++) {
          var palabra = palabras[i];
          
          // Verificar si la palabra cumple con la expresión regular
          if (!regex.test(palabra)) {
             control=true
              }
            }
         //Si existe control quiere decir que las condiciones no se cumplen y se corta aqui
        if(control){
          alert('El texto debe contener solo letras minúsculas, sin acentos y sin la letra ñ.');
        //document.getElementById("parrafo").value=""
        }else{
            let cifrado=texto
                .replace(/e/gi,"enter")
                .replace(/i/gi,"imes")
                .replace(/a/gi,"ai")
                .replace(/o/gi,"ober")
                .replace(/u/gi,"ufat")

               // console.log(cifrado)

                document.getElementById("resultado").style.display="none"
                document.getElementById("mensaje").style.display="flex"
                document.getElementById("boton_limpiar").style.display="flex"
                //let pruebadato=document.getElementById("mensajeRespuesta")
                //pruebadato.value=cifrado

                var textarea = document.getElementById('mensajeRespuesta');
                var textoOriginal = cifrado;
                var longitud = textoOriginal.length;
                var textoDescifrado = '';

                // Mostrar una letra cada 100 milisegundos
                var index = 0;
                var intervalo = setInterval(function() {
                    if (index < longitud) {
                        textoDescifrado += textoOriginal[index];
                        textarea.value = textoDescifrado;
                        index++;
                    } else {
                        clearInterval(intervalo); // Detener la animación cuando se complete
                    }
                }, 10);
                
                // Restaurar el texto original después de 2 segundos
                setTimeout(function() {
                    textarea.value = textoOriginal;
                },);
        }
        }else{
            alert("Ingresa un texto")
        }   

    } 

    function desencriptar() {
        var texto=document.getElementById("parrafo").value
        if(texto.length>0){
        var regex = /^[a-z]+$/;
        var control="" 
          // Dividir el texto en palabras usando el espacio como separador
          var palabras = texto.split(/\s+/);
    
          // Iterar por cada palabra
          for (var i = 0; i < palabras.length; i++) {
              var palabra = palabras[i];
              
              // Verificar si la palabra cumple con la expresión regular
              if (!regex.test(palabra)) {
                 control=true
                  }
                }
             //Si existe control quiere decir que las condiciones no se cumplen y se corta aqui
            if(control){
              alert('El texto debe contener solo letras minúsculas, sin acentos y sin la letra ñ.');
            document.getElementById("parrafo").value=""
            }else{
                let descifrado=texto
                    .replace(/enter/gi,"e")
                    .replace(/imes/gi,"i")
                    .replace(/ai/gi,"a")
                    .replace(/ober/gi,"o")
                    .replace(/ufat/gi,"u")
    
                    document.getElementById("resultado").style.display="none"
                    document.getElementById("mensaje").style.display="flex"
                    document.getElementById("boton_limpiar").style.display="flex"
                  //  let pruebadato=document.getElementById("mensajeRespuesta")
                  //  pruebadato.value=descifrado
    
                    var textarea = document.getElementById('mensajeRespuesta');
                    var textoOriginal = descifrado;
                    var longitud = textoOriginal.length;
                    var textoDescifrado = '';
    
                    // Mostrar una letra cada 100 milisegundos
                    var index = 0;
                    var intervalo = setInterval(function() {
                        if (index < longitud) {
                            textoDescifrado += textoOriginal[index];
                            textarea.value = textoDescifrado;
                            index++;
                        } else {
                            clearInterval(intervalo); // Detener la animación cuando se complete
                        }
                    }, 10);
                    
                    // Restaurar el texto original después de 2 segundos
                    setTimeout(function() {
                        textarea.value = textoOriginal;
                    },)
            }
            }else{
                alert("Ingresa un texto")
            }   
    
        }      


        function copiar() {
            /* Seleccionar el textarea */
            var textarea = document.getElementById("mensajeRespuesta");
            
            /* Seleccionar el texto dentro del textarea */
            textarea.select();
            textarea.setSelectionRange(0, 99999); /* Para dispositivos móviles */
          
            /* Copiar el texto seleccionado al portapapeles */
            document.execCommand("copy");
          
            /* Alerta o mensaje de éxito */
            alert("Texto copiado al portapapeles: " + textarea.value);
            document.getElementById("resultado").style.display="flex"
            document.getElementById("mensaje").style.display="none"
            document.getElementById("parrafo").value=""
            document.getElementById("boton_limpiar").style.display="none"

          }
        
          function limpiar (){
            document.getElementById("resultado").style.display="flex"
            document.getElementById("mensaje").style.display="none"
            document.getElementById("parrafo").value=""
            document.getElementById("boton_limpiar").style.display="none"
          }






















/*
function desencriptar(){
    var texto=document.getElementById("parrafo").value
    var regex = /^[a-z]+$/;
    if(texto.length){
        if (regex.test(texto)){
    let descifrado=texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u")

    descifrado?control="true":"false"
    let pruebadato=document.getElementById("mensajeRespuesta")
    pruebadato.value=descifrado
    
    alert(descifrado)
}else{
    alert("El texto debe contener solo letras minúsculas y sin acentos.")
}
    }else{
        alert("Ingresa algun texto para desencriptar")
    }
}
*/