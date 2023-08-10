function torneos() {
    async function torneo() {
        //RUTA DEL SERVICIO WEB LOCAL  const ruta = "http://localhost/dota%202/torneos.php";
        const ruta = "https://servicioswebdota2.000webhostapp.com/torneos.php";
        const response = await fetch(ruta);
        const data = await response.json()
        //console.log(data)
        tablaTorneos(data)
    }
    const tablaTorneos = (data) => {
        let contenido = "";
        data.sort((a, b) => b.fec - a.fec)
            .map(item => {
                let fila = "<tr>"
                fila += "<td>" + item.nombre + "</td>";
                fila += "<td>" + item.ganador + "</td>";
                fila += "<td>" + item.fecha + "</td>";
                fila += "<td>" + item.pais + "</td>";
                fila += "<td>" + " $" + parseFloat(item.monto).toFixed(3) + "</td>";
                fila += "</tr>"
                contenido += fila
            })
        document.getElementById("tbody-torneos").innerHTML = contenido;
        $("#tbody-torneos tr").click(function () {
            $("#tbody-torneos tr").removeClass("table-dark")
            $(this).addClass("table-dark")
        })

    }



    torneo()
}
torneos()
