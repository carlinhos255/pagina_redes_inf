var albumes = [
    {
      "artista": "jhon coltrane",
      "nombre": "",
      "portada": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
      "genero": "Pop-Rock"
    },
    {
        "artista": "The Beatles",
        "nombre": "Let It Be 2",
        "portada": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
        "genero": "Pop-Rock"
      } 
];


function random(){

    //generamos un numero aleatorio
    numero = Math.floor((Math.random()*100)%3);

    //selecionamos el album
    album = albumes[numero];

    //establecemos titulo
    document.getElementById("titulo").textContent = album["artista"] + " - " + album["nombre"];

    //establecemos portada
    document.getElementById("portada").src = album["portada"];
}

document.getElementById("random").addEventListener("click", random)