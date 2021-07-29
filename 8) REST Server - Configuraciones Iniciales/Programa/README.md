# Pasos:

1. Se instalo el express y se elaboro los endpoints:
	- GET
	- POST
	- PUT
	- DELETE

2. Se utilizo bodyParser para poder manejar los diferentes tipos de input data que se envien 
	- JSON
	- Form-data

3. Se creo el archivo config.js que funciona como las variables de entorno entre local, DEV y PROD
	- En config.js definimos las variables de entorno que vayemos a usar 
	- El confi.js lo importamos en el index para que lo podamos usar como puerto
	- En el server.listen usamos la variable process.env.PORT como puerto