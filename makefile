dev:
	npm run dev

down:
	docker-compose -f apps/deploy/docker-compose.dev.yaml down -v