var posactual="pantalla1";
var tablanav=[["pantalla1","---------","pantalla2"],
			  ["pantalla2","pantalla1","pantalla3"],
			  ["pantalla3","pantalla2","pantalla4"],
			  ["pantalla4","pantalla3","pantalla5"],
			  ["pantalla5","pantalla4","pantalla6"],
			  ["pantalla6","pantalla5","pantalla7"],
			  ["pantalla7","pantalla6","pantalla8"],
			  ["pantalla8","pantalla7","---------"],]
/*se utiliza oara cargar la plantilla al recargar la pagina*/
window.onload = function() {
	cargarPlantilla("pantalla1");
};

/*se utiliza para caragar las plantillas, el template en el si es para confirmar que la pagina si existe
  la palabra plantilla la utilizamos para saber que es lo que nos dice en el html*/
function cargarPlantilla(plantilla){
	var template = document.getElementById(plantilla);
	if (template) {
		var clon = template.content.cloneNode(true);
		document.getElementById("contenedor").innerHTML ="";
		document.getElementById("contenedor").appendChild(clon);
		/*se actualiza la posicion actual*/
		posactual=plantilla;
	}

}

function navegar(dir){
	var i=0;
	while(posactual != tablanav[i][0]){
		i++;
	}
	var plant= tablanav[i][dir];
	cargarPlantilla(plant);
}