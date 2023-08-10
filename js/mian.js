$("#paises-lista li").click(function () {
    let pais = $(this).attr("name")
    //console.log(pais)
    $("#paises-lista li").removeClass("active")
    $(this).addClass("active")
    fetch("paises/" + pais)
        .then(response => response.text())
        .then(data => {
            //  console.log(data)
            $("#contenido-paises").html(data)

        })
})


$("#personaje").click(function () {
    fetch("./pages/personajes.html")
        .then(response => response.text())
        .then(data => {
            //  console.log(data)
            $("#main-contenido").html(data)
        })
})

$("#torneos").click(function () {
    fetch("./pages/torneos.html")
        .then(response => response.text())
        .then(data => {
            $("#main-contenido").html(data)
        })
})
$("#ver-heroes").click(function () {
    fetch("./pages/personajes.html")
        .then(response => response.text())
        .then(data => {
            $("#main-contenido").html(data)
        })
})/*
function aleatorio() {
    let contenido = ""
    let x = "<h1>" + Math.random() + "</h1>"
    contenido += x
    document.querySelector("#maximo-jugadores"").innerHTML = contenido

}
aleatorio()
*/
/*
$("#bb").click( function () {
    let contenido = ""
    let x =  "<h3>" + (Math.round(Math.random() * (1 + 1000 - 100) + 100)).toFixed(3) + "</h3>"
    contenido += x
    // console.log(contenido)
    document.querySelector("#maximo-jugadores").innerHTML += contenido


})
*/

$("#equipos").click(function () {
    fetch("./pages/equipos.html")
        .then(response => response.text())
        .then(data => {
            $("#main-contenido").html(data)

        })
})
/*
async function servicioApp() {
    let ruta = "http://localhost/app-musica/canciones.php";
    const response = await fetch(ruta);
    const data = await response.json();
    // console.log(data)
    audioCanciones(data)
}
const audioCanciones = (data) => {
    let contendio = "";
    data.map(item => {
        let audio = "<audio controls >";
        audio += "<source src='http://localhost/app-musica/bon%20jovi/" + item.nombrecancion + "' type='audio/mp3'>"
        audio += "</audio>"
        contendio += audio
    })
    document.getElementById("musica-video").innerHTML = contendio
}
servicioApp()*/