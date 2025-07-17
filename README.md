# Las Recetas de Gusteau

## Participantes (APIcultores)
* Lisandro Garbarino (113607)
* Tomás Chirino (113126)
* José Lisandro Obregon (113792)

## Descripción

![alt text](https://github.com/jlobregon/trabajo-final-intro/tree/docs/terminar-readme/readme-img/1.png)


## Instrucciones
Para correr el proyecto se requiere [docker](https://www.docker.com) y [GNU Make](https://www.gnu.org/software/make/) (opcional, se pueden usar `docker` leyendo el Makefile).
1. Renombrar *.env_example* como *.env*
    * Se pueden modificar las variables de entorno (opcional)
2. Construir las imágenes del backend y frontend con `make build`
3. Correr el proyecto con `make start`

Cuando se quiera detener el proyecto se debe hacer `make stop`, también se lo pude reiniciar (necesario si se realizaron cambios de código en el backend) con `make restart`.

### Otros comandos útiles
* `make start-db`, `make start-backend` y `make start-frontend` para correr las imagenes por separado (son dependientes, pueden haber fallos)
* `make stop-db`, `make stop-backend` y `make stop-frontend` para detener los contenedores por separado (son dependientes, pueden haber fallos)
* `make restart-db`, `make restart-backend` y `make restart-frontend` para detener y volver a correr los contenedores por separado (son dependientes, pueden haber fallos)
* `make inspect-db`, `make inspect-backend` y `make inspect-frontend` permite ver los logs de los contenedores por separado
* `make clear-db` borra el volumen de la base de datos y, en consecuencia, los datos que tiene dentro. Esto permite que en el proximo `make start-db` se vuelvan a cargar y ejecutar los archivos en *db-init*
* `make update-db` ejecuta `stop-db`, `clear-db` y `start-db` en secuencia. Útil cuando se cambió *db-init* y se quiere cargar esos datos

## Creditos/Agradecimientos
* express
    * URL: [https://expressjs.com/](https://expressjs.com/)
    * Licencia: [MIT](https://github.com/expressjs/express/blob/master/LICENSE)

* node-postgres
    * URL: [https://node-postgres.com/](https://node-postgres.com/)
    * Licencia: [MIT](https://github.com/brianc/node-postgres/blob/master/LICENSE)

* joi
    * URL: [joi.dev](https://joi.dev/)
    * Licencia: [BSD](https://github.com/hapijs/joi/blob/master/LICENSE.md)

* cors
    * URL: [npmjs.com/package/cors](https://www.npmjs.com/package/cors)
    * Licencia: [MIT](https://github.com/expressjs/cors/blob/master/LICENSE)

* http-server:
    * URL: [npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)
    * Licencia: [MIT](https://github.com/http-party/http-server/blob/master/LICENSE)
