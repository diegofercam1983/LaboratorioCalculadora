function changePage(change){
    document.getElementById('main-frame').src = change;
}

   function limpiarFormularioP1() {
      document.getElementById("formulario").reset();
      //document.getElementById("a").value = "";
      //document.getElementById("b").value = "";
       //document.getElementById("nombreP2").value = "";
      //document.getElementById("esMayorDeEdad").checked = false;
      //document.getElementById("tieneLicencia").checked = false;
      console.clear(); // Limpia la consola
      // document.getElementById("nombreP2").focus();
    }

    
   function limpiarFormularioP2() {
      //document.getElementById("formulario").reset();
      document.getElementById("formularioP2").reset();
      //document.getElementById("formularioComparaciones").reset();
      document.getElementById("a").value = "";
      document.getElementById("b").value = "";
      // document.getElementById("nombreP2").value = "";
      //document.getElementById("esMayorDeEdad").checked = false;
      //document.getElementById("tieneLicencia").checked = false;
      console.clear(); // Limpia la consola
       //document.getElementById("nombreP2").focus();
    }

        
    function limpiarFormularioP3() {
        document.getElementById("nombreP2").value = "";
        document.getElementById("esMayorDeEdad").checked = false;
        document.getElementById("tieneLicencia").checked = false;
        console.clear();
        }