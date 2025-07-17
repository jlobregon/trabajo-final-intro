start: start-db start-backend start-frontend
	@echo "Se iniciaron todos los servicios"

start-db:
	docker compose up postgres -d

start-backend:
	docker compose up backend -d

start-frontend:
	docker compose up frontend -d

clear-db:
	docker compose down -v postgres
	@echo "Se eliminó el volumen de la base de datos"

stop-db:
	docker compose down postgres

stop-backend:
	docker compose down backend

stop-frontend:
	docker compose down frontend

stop: stop-db stop-backend stop-frontend
	@echo "Se detuvieron todos los servicios"

restart-db: stop-db start-db
	@echo "Se finalizó el reinicio"

restart-backend: stop-backend start-backend
	@echo "Se finalizó el reinicio"

restart-frontend: stop-frontend start-frontend
	@echo "Se finalizó el reinicio"

restart: stop start
	@echo "Se finalizó el reinicio"

build:
	docker compose build

inspect-db:
	docker logs postgres

inspect-backend:
	docker logs backend

inspect-frontend:
	docker logs frontend

update-db: stop-db clear-db start-db
	@echo "Actualizado crack!"
