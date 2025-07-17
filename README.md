# Las Recetas de Gusteau

## Participantes (APIcultores)
* Lisandro Garbarino (113607)
* Tomás Chirino (113126)
* José Lisandro Obregon (113792)

## Descripción
Las Recetas de Gusteau es una página web inspirada en la película Ratatouille en donde el usuario puede ver a los chefs más destacados del restaurant de Gusteau junto con sus recetas características.
También el usuario puede crear, editar y eliminar las recetas, chefs e ingredientes dentro de la página.

El sitio web cuenta con 3 páginas diferentes sin contar la página de inicio.

<img width="2560" height="1114" alt="Image" src="https://github.com/user-attachments/assets/6ff6aadb-c2f8-4f4b-9a45-e2022696a106" />
(Pagina de inicio)

Arriba hay un barra de navegacion en donde se puede acceder a las distintas entidades.
###Recetas:

<img width="1596" height="937" alt="Image" src="https://github.com/user-attachments/assets/f109b15a-9277-4a93-8d0f-77f02b90376b" />
(Pagina de recetas)

Al hacer click sobre la tarjeta de una receta especifica, se abrirá un modal con toda su información, junto a botones para editar y borrar la receta seleccionada.

<img width="1050" height="1203" alt="Image" src="https://github.com/user-attachments/assets/7b0a6c61-8ef6-4d41-a12c-890afd637c2b" />
(Ejemplo de modal receta)

En caso de querer crear una receta, se deberá hacer click sobre el boton verde que dice CREAR RECETA, en la barra de navegación, y redireccionará al usuario a un formulario para que complete con los campos de la nueva receta.

<img width="1758" height="1075" alt="Image" src="https://github.com/user-attachments/assets/8ba64b91-6288-496d-99ac-53606cb1fdbf" />
(Formulario para crear receta. Es el mismo formulario para la edición de recetas)


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
