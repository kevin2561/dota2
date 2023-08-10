function eDota() {
    async function equiposDota() {
        //servicio web local  const ruta = "http://localhost/dota%202/regionesEquipos.php";
        const ruta = "https://servicioswebdota2.000webhostapp.com/regionesEquipos.php";
        const response = await fetch(ruta);
        const data = await response.json()
        // console.log(data)
        cuadricula(data)
    }

    const cuadricula = (data) => {
        let contenido = "";
        data.sort((a, b) => a.region.toLowerCase() > b.region.toLowerCase() ? 1 : -1, 0)
        data.map(item => {
            let lista = "<li class='list-group-item' idequipo='" + item.id + "'>"
            lista += item.region

            lista += "</li>"
            contenido += lista;

        })
        document.getElementById("lista-equipos").innerHTML = contenido

        $("#lista-equipos li").click(function () {
            $("#lista-equipos li").removeClass("active")
            $(this).addClass("active")
        })

        let idRegion = document.querySelectorAll("#lista-equipos li")
        idRegion.forEach(x => {
            x.addEventListener("click", (event) => regionSelecionada(event))
        })

        const regionSelecionada = (event) => {
            let idRegion = event.currentTarget.getAttribute("idequipo")
            //console.log(idRegion)
            equiposDota2(idRegion)
        }
    }


    async function equiposDota2(idRegion) {
        //RUTA DEL SERVICIO WEB LOCAL const ruta = "http://localhost/dota%202/equipos.php?regionorigen=" + idRegion;
        const ruta = "https://servicioswebdota2.000webhostapp.com/equipos.php?regionorigen=" + idRegion;
        const response = await fetch(ruta);
        const data = await response.json();
        //console.log(data)
        equiposx(data)
        // jugadores(data)
        //id='jugadores-equipos'
    }
    const equiposx = (data) => {
        let contenido = "";

        data.sort((a, b) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1, 0)
        data.map(item => {
            let card = "<div class='col'>"
            card += "<div class='card h-100'>"
            card += "<figure><img player='" + (item.jugadores === "" ? "no confirmados" : item.jugadores) + "' src='https://servicioswebdota2.000webhostapp.com/equipos/" + item.imagen + "' class='card-img-top' ></figure>"
            card += "<div id='card-titulo' class='card-body'>"
            card += "<h5>" + item.nombre + "</h5>"
            card += "</div></div></div>"
            contenido += card
        })
        document.getElementById("contenido-card").innerHTML = contenido;

        $("#contenido-card figure").append("<figcaption>");
        $("#contenido-card figure figcaption").append("<div>");


        $("#contenido-card figure").mouseenter(function () {
            $(this).find("figcaption").stop().slideDown("slow")
        })

        $("#contenido-card figure").mouseleave(function () {
            $(this).find("figcaption").stop().slideUp("slow")
        })
        $("#contenido-card figure").each(function () {
            let players = $(this).find("img").attr("player")

            $(this).find("figcaption").find("div").html(players)

        })


    }


    equiposDota()
}
eDota()
