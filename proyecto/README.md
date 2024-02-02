# Proyecto

## NodeJS

### Ejecución

La aplicación de NodeJS se ejecuta en el puerto 3000 y para ejecutar la aplicación debes ejecutar:

- El siguiente comando instalará las dependencias necesarias para ejecutar la aplicación:

```bash
npm install
```

- El siguiente comando ejecutará la aplicación:

```bash
npm start
```

Además, decir que se debe de utilizar una imagen de NodeJS cuya versión principal sea mayor o igual a 20.

### Configuración

La API necesita 4 variables de entorno:

- SERVER_NAME: El nombre or ip del servidor.
- DATABASE_NAME: El nombre de la base de datos. Este debe de ser "admin" a no ser que hayas creado un usuario con permisos de escritura y lectura en otra base de datos.
- USER_NAME: El nombre de usuario con permisos de escritura y lectura o administrador en la base de datos que hayas indicado.
- USER_PASSWORD: La contraseña del usuario.

### Uso

La aplicación exporta una API, la cual tiene los siguientes endpoints:

- POST /juegos: Crea un nuevo juego.
- GET /juegos/<id>: Devuelve el juego con el id especificado.
- PUT /juegos/<id>: Modifica el juego con el id especificado.
- DELETE /juegos/<id>: Elimina el juego con el id especificado.

El formato de los juegos es el siguiente:

```json
{
  "nombre": "Mario",
  "plataforma": "Nintendo 64",
  "precio": "20€",
  "genero": "Plataformas"
}
```

Para probar la API, puedes utilizar la herramienta Postman o curl.

Decir que primero deberás usar el endpoint POST para crear un juego introduciendo en el body el formato de juego que se ha mostrado anteriormente.

Cuando lo crees, devolverá la información del juego más un id, ese id sirve para utilizar los otros endpoints.
