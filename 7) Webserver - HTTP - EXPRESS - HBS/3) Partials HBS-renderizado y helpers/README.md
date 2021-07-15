# Temas de la esta carpeta: 

Aquí cubriremos varios temas como: 


- Uso de partials:

	- Se necesita importar el hbs en el app.js
	- En app.js dnde tenemos el servidor debemos indicarle que vamos a usar los partials
	- Se debe crear una carpeta "partials" donde van a estar separados los codigos
	- En las paginas principales "home, about" vemos como llamamos a los partials
	- Cuando se utilizando el nodemon puede fallar se recomuenda usar --> nodemon app -e


- Como renderizar las otras paginas usando el HBS y partials:

	- Se debe crear un endpoint que apunte a un partial y asi ese mismo lo renderice
	- En el caso de navbar se debe redireccionar el href con el url del enpoint del server


- Helpers:

	- Los helpers son aquellas variables que al no estar en el render son ejecutadas e invocadas en el html/hbs
	- Debemos crearlos usando el metodo "registerHelper" de hbs 
	- Los helpers aceptan 2 parametros. un nombre y uns funcion callback
	- Para usar los helpers se deben colocar como son llamados en "{{}}" para que puedan ser invocados
	- Lo encontramos en el folder hbs
	- Tambien los helpers pueden requerir parametros de inicio para usar su callback
		- FIjate en el 2do helper y su utlizacion en el home.hbs como se invoca y le introducimos el pametro del callback