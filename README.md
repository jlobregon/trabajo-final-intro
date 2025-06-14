# [nombre del proyecto]

## Participantes
* Lisandro Garbarino (113607)
* Tomás Chirino (113126)
* José Lisandro Obregon (113792)

## Descripción

## Instrucciones
1. Renombrar *.env_example* como *.env*
    * Se pueden modificar las variables de entorno (opcional)
2. Iniciar los servicios que se desean
    * Todos los servicios con `make start`
    * La base de datos por separado con `make start-db`
    * El backend por separado (requiere la db) con `make start-backend`

> [!NOTE]
> En caso de que sea necesario se puede ejecutar el comando `make clear-db` para que se borre el volumen de la base de datos

## Creditos/Agradecimientos
* express
    * URL: [https://expressjs.com/](https://expressjs.com/)
    * Licencia: [MIT](https://github.com/expressjs/express/blob/master/LICENSE)

* node-postgres
    * URL: [https://node-postgres.com/](https://node-postgres.com/)
    * Licencia: [MIT](https://github.com/brianc/node-postgres/blob/master/LICENSE)
