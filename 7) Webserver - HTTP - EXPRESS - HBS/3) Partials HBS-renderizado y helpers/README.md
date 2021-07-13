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