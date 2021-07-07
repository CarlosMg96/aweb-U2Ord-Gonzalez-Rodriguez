var notas = {  
    descripcion:"",
};
var filas =1;
var columnas =1;

var fecha = new Date();
var horas = fecha.getHours();

//Me complique la vida
/*
function crear(){
    console.log ("se llamo a crear nueva tabla");
    notas.descripcion = document.getElementById("descripcion").value;
    actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("descrip").innerHTML = notas.descripcion;   
}  */

function crearTabla() {
    var nt = document.getElementById("nota").value;
    console.log(nt);

    var body = document.getElementsByTagName("body")[0];

    var tabla   = document.createElement("table");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var hilera = document.createElement("tr");

                
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(nt);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
                

    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "0");
    tabla.setAttribute("style", "margin: 0 auto;");
}