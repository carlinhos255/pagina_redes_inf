function random(){

  $.ajax({
    type: "GET",
    url: "./api/obtener.php?genero=" + $("#genero").val(),
    success: function(respuesta){

      if(respuesta == "error"){
        
        alert("HUBO UN ERROR");

      }else{

        respuesta = JSON.parse(respuesta);

        //establecemos titulo
        document.getElementById("titulo").textContent = respuesta["artista"] + " - " + respuesta["nombre"];

        //establecemos portada
        document.getElementById("portada").src = respuesta["portada"];

      }

    }
  });

}

document.getElementById("random").addEventListener("click", random)