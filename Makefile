start: start-db start-backend
	@echo "Se iniciaron todos los servicios"

start-db:
	docker compose up postgres -d

start-backend:
	docker compose up backend -d

clear-db:
	docker compose down -v postgres
	@echo "Se eliminó el volumen de la base de datos"

stop-db:
	docker compose down postgres

stop-backend:
	docker compose down backend

stop: stop-db stop-backend
	@echo "Se detuvieron todos los servicios"

restart: stop start
	@echo "Se finalizó el reinicio"
