function personajes() {
    async function personaje() {
        //Ruta antigua   ruta = "http://localhost/dota%202/personjes.php";
        const ruta = "https://servicioswebdota2.000webhostapp.com/personjes.php";
        const response = await fetch(ruta)
        const data = await response.json()
        //  console.log(data)
        cardPersonaje(data)
    }

    const cardPersonaje = (data) => {
        let contenido = ""
        data.sort((a, b) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1, 0)
            .map(item => {

                let card = "<div  class='col'>"
                card += "<div id='card-imagen'>"
                card += "<img id='imagen-heroe' src='https://servicioswebdota2.000webhostapp.com/personajes/" + item.imgchica + "'   class='card-img-top' title='" + item.nombre + "'>"
                card += "<div class='mas'>"
                card += "<img  src='https://servicioswebdota2.000webhostapp.com/personajes/" + item.imgatri + "'   >"

                card += "<span>" + item.nombre + "</span>"
                card += "</div></div></div>"
                contenido += card


            })
        const cardPerson = document.getElementById("card-personajes")
        cardPerson.innerHTML = contenido;

        //----------------------FILTRAR-HEROE---------------------------------- 

        $("#buscador-heroe").keyup(function (e) {
            if (e.target.matches("#buscador-heroe")) {
                document.querySelectorAll("#card-imagen ").forEach(a => {
                    a.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                        ? a.classList.remove("no-encontrado")
                        : a.classList.add("no-encontrado")

                })

            }


        })
        //------------------------------DETALLE-HEROE-----------------------------------

        $("#card-imagen #imagen-heroe").append("<figcaption>");
        $("#card-imagen #imagen-heroe figcaption").append("<div>")

        $("#card-imagen #imagen-heroe").mouseenter(function () {
            $(this).find("figcaption").stop().slideDown("slow")
          //  console.log("arriba")

        })
        $("#card-imagen #imagen-heroe").mouseleave(function () {
            $(this).find("figcaption").stop().slideUp("slow")
           // console.log("abajo")

        })
        $("#card-imagen ").each(function () {
            let titulo = $(this).find("img").attr("title");
            let ruta = $(this).find("img").attr("src")
            //console.log(titulo)
            $(this).find("figcaption").find("div").html(titulo)
            $(this).find("figcaption").find("div").append("<i class='bi bi-zoom-in'></i>")
        })

        //----------------------FUERZA---------------------------------- 

        $("#filtrar #fuerza").click(function () {
            let result = data.filter(item => item.atributo == "Fuerza")
            $("#filtrar #fuerza").removeClass("oscuro")


            cardPersonaje(result)

            $("#filtrar #fuerza").click(function () {
                $("#filtrar #fuerza").removeClass("oscuro")
                $(this).addClass("oscuro")
                cardPersonaje(data)


            })
        })

        //----------------------AGILIDAD---------------------------------- 

        $("#filtrar #agilidad").click(function () {
            let result = data.filter(item => item.atributo == "Agilidad")

            $("#filtrar #agilidad").removeClass("oscuro")

            cardPersonaje(result)

            $("#filtrar #agilidad").click(function () {
                $("#filtrar #agilidad").removeClass("oscuro")
                $(this).addClass("oscuro")
                cardPersonaje(data)
            })
        })

        //----------------------INTELIGENCIA---------------------------------- 
        $("#filtrar #inteligencia").click(function () {
            let result = data.filter(item => item.atributo == "Inteligencia")
            $("#filtrar #inteligencia").removeClass("oscuro")

            cardPersonaje(result)


            $("#filtrar #inteligencia").click(function () {
                $("#filtrar #inteligencia").removeClass("oscuro")
                $(this).addClass("oscuro")
                cardPersonaje(data)


            })
        })

    }

    personaje()
}
personajes()

