# Sprint 2

## MySQL

En la carpeta MySQL puedes ver un script llamado juegos.sql que contiene una tabla juegos que muestra el comando para crear esta tabla en una base de datos.

Hay varias formas de hacer esto:

1. Copiar el fichero /docker-entrypoint-initdb.d/ para la imagen docker mysql a la hora de crear un contenedor o una imagen específica a partir de mysql.
2. Una vez ejecutado el contenedor a partir de la imagen mysql, puedes conectarte a mysql desde dentro del contenedor y ejecutar el comando que aparece en el script en la base de datos que hayas creado. Si asocias el contenedor a un volumen, esto no se perderá cuando crees otro contenedor con la imagen mysql siempre que use el mimsmo volumen.

## Nginx

En la carpeta nginx puedes ver un fichero de configuración de nginx que muestra cómo configurar este servicio.

Para que se utilice esta configuración debes eliminar el fichero de configuración que se encuentra en /etc/nginx/conf.d/default.conf y copiar el fichero de configuración que se encuentra en la carpeta nginx a /etc/nginx/conf.d/default.conf.

Es más fácil si creas un fichero Dockerfile que cree una imagen a partir de nginx y haga los comandos explicados en la frase anterior.

Sobre el fichero nginx.conf, tendrás que cambiar el nombre de mi-contenedor-flask y mi-contenedor-flask2 por el nombre que le hayas dado a tu contenedor de flask.
Deberás además de añadir una línea más con el tercer contenedor (recuerda que son 3 réplicas las que debes hacer).

## Flask App

En la carpeta flask-app puedes ver varios ficheros que sirven para ejecutar una aplicación de flask en python.

Los comandos para que funcione son:

```bash
pip install -r requirements.txt
python app.py
```

Decir también que el servidor de flask se ejecuta en el puerto 5000 (por eso en nginx.conf está server <nombre_servidor>:5000).
