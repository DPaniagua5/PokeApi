# Fullstack PokeApi
##### Desarrollo de una pequeña APIRest de pokemon, consumida por una página web reactiva.
## Frontend:
### Tecnologías utilizadas:
* HTML: Se utiliza HTML para que el usuario pueda consumir la API.
* CSS: Se utiliza css para estilizar las paginas css haciendola más amigable al usuario
* JS: Se utiliza Javascript para realizar las peticiones a la API.

### Manual de Uso:
Para comenzar a utilizar la aplicación es necesario poner en línea el servidor en el que se encuentra la API, para esto se necesita una consola en el codigo fuente, y poner el código: "npm run dev", con esto el servidor estará en línea y se podrá consumir la API.

Seguido a esto es necesario ingresar a la página de login, identificada como index.html. Una vez acá, deverá ingresar un usuario válido, de lo contrario no podrá ingresar.

Una vez Ingresado a la aplicación, se mostrará una pantalla de inicio, en la cual puede acceder a los datos de Usuarios registrados y a la Pokedex.

#### Usuarios Registrados:
En la pantalla  de Usuarios se muestran los usuarios con acceso a la página. Además se les agrega una imagen de identificación.

#### Pokedex:
Si ingresa a la pantalla de Pokedex, podrá visualizar los pokemones cargados en tarjetas con información de los mismos.

##### Filtro:
* Filtrar por Número: Se debe ingresar el número de un pokemon y se devolverá la busqueda.
* Filtrar por Nombre: Se debe ingresar el nombre de un pokemon y se devolverá la busqueda.
* Filtrar por Tipo: Se seleccionará el tipo de pokemon que desea y se devolverá la busqueda.

## Backend
La API REST fue desarrollada en Javascript.
### Modulos Utilizados:
* Node.JS: Versión: v16.14.2, Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.
* Express: Versión: 4.17.3, Framework web minimalista y rápido, se utilizó para montar la API con requerimientos http
* Morgan: Versión: 1.10.0, Middleware de registro de solicitudes HTTP para node.js
* Cors: Versión : 2.8.5, CORS es un paquete de node.js para proporcionar un middleware Connect / Express que se puede usar para habilitar CORS con varias opciones.

### Puerto utilizado:
Se utiliza el puerto 7000 para que la API se ponga en línea.

### ENDPOINTS
### /Get:
* /pokedex: En este Endpoint se envia la información de la Pokedex en formato .JSON.
* /usuarios: En este Endpoint se envia la información de los Usuarios registrados en formato .JSON.

### /Post:
* /login: Endpoint utilizado para iniciar sesión, la API recibe un JSON con un nombre de usuario y una contraseña y evalua si puede ingresar o no. Devuelve un número como estado (1 = Puede entrar).
* /tipo: La API recibe un JSON con el tipo de pokemon y devuelve un JSON con los POkemons de ese tipo.
* /nombre: La API recibe un JSON con el nombre de algún Pokemon y devuelve un JSON con la información del Pokemon
* /numero: La API recibe un JSON con el número de algún Pokemon y devuelve un JSON con la información del Pokemon
