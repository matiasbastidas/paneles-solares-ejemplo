// Funciones para calcular los watts de cada uno de los elementos

//Objecto global para guardar las sumas
var sumas = {};

//TV
function functTV() {
    let tvpulgadas = parseInt(document.getElementById("selectPulgadas").value);
    let tvcantidad = parseInt(document.getElementById("selectTVCantidad").value);
    let tvhoras = parseInt(document.getElementById("selectTVHoras").value);
    let sumaTV = tvpulgadas * tvcantidad * tvhoras;
    document.getElementById("resultadoTV").innerHTML = sumaTV + " Watts";
    sumas.tv = sumaTV;
}
//Hervidor
function functHervidor() {
    let hervidorcantidad = parseInt(document.getElementById("selectHervidorCantidad").value);
    let hervidorhoras = parseInt(document.getElementById("selectHervidorHoras").value);
    const gastohervidor = 2000;
    let sumaHervidor = hervidorcantidad * hervidorhoras * gastohervidor;
    document.getElementById("resultadohervidor").innerHTML = sumaHervidor + " Watts";
    sumas.hervidor = sumaHervidor;
}

//Microondas
function functMicro() {
    let microondascantidad = parseInt(document.getElementById("selectMicroondasCantidad").value);
    let microondashoras = parseInt(document.getElementById("selectMicroondasHoras").value);
    const gastomicroondas = 1100;
    let sumamicroondas = microondascantidad * microondashoras * gastomicroondas;
    document.getElementById("resultadomicroondas").innerHTML = sumamicroondas + " Watts";
    sumas.microondas = sumamicroondas;
}

//Lavadora
function functLava() {
    let lavadoracantidad = parseInt(document.getElementById("selectLavadoraCantidad").value);
    let lavadorahoras = parseInt(document.getElementById("selectLavadoraHoras").value);
    const gastolavadora = 500;
    let sumalavadora = lavadoracantidad * lavadorahoras * gastolavadora;
    document.getElementById("resultadolavadora").innerHTML = sumalavadora + " Watts";
    sumas.lavadora = sumalavadora;
}

//Secadora
function functSeca() {
    let secadoracantidad = parseInt(document.getElementById("selectSecadoraCantidad").value);
    let secadorahoras = parseInt(document.getElementById("selectSecadoraHoras").value);
    const gastosecadora = 1700;
    let sumasecadora = secadoracantidad * secadorahoras * gastosecadora;
    document.getElementById("resultadosecadora").innerHTML = sumasecadora + " Watts";
    sumas.secadora = sumasecadora;
}

//Aspiradora
function functAspi() {
    let aspiradoracantidad = parseInt(document.getElementById("selectAspiradoraCantidad").value);
    let aspiradorahoras = parseInt(document.getElementById("selectAspiradoraHoras").value);
    const gastoaspiradora = 1750;
    let sumaaspiradora = aspiradoracantidad * aspiradorahoras * gastoaspiradora;
    document.getElementById("resultadoaspiradora").innerHTML = sumaaspiradora + " Watts";
    sumas.aspirador = sumaaspiradora;
}

//Refrigerador
function functRefri() {
    let refrigeradorcantidad = parseInt(document.getElementById("selectRefrigeradorCantidad").value);
    const gastorefrigerador = 200;
    let sumarefrigerador = refrigeradorcantidad * gastorefrigerador;
    document.getElementById("resultadorefrigerador").innerHTML = sumarefrigerador + " Watts";
    sumas.refrigerador = sumarefrigerador;
}

//Congelador
function functConge() {
    let congeladorcantidad = parseInt(document.getElementById("selectCongeladorCantidad").value);
    const gastocongelador = 420;
    let sumacongelador = congeladorcantidad * gastocongelador;
    document.getElementById("resultadocongelador").innerHTML = sumacongelador + " Watts";
    sumas.congelador = sumacongelador;
}

//Ampolletas-Luz
function functAmpolletas() {
    let ampolletascantidad = parseInt(document.getElementById("selectAmpolletasCantidad").value);
    let ampolletashoras = parseInt(document.getElementById("selectAmpolletasHoras").value);
    const gastoampolletas = 6;
    let sumaampolletas = ampolletascantidad * ampolletashoras * gastoampolletas;
    document.getElementById("resultadoampolletas").innerHTML = sumaampolletas + " Watts";
    sumas.ampolletas = sumaampolletas;
}

//Suma total de Watts
function sumaTotal() {
    let resultadotv = sumas.tv || 0;
    let resultadohervidor = sumas.hervidor;
    let sumatotalwatts= resultadohervidor + resultadotv || 0;
    document.getElementById("resultadototal").innerHTML = sumatotalwatts + " Watts";
}