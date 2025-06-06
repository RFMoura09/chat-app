dev:
	npm run dev

down:
	docker-compose -f apps/deploy/docker-compose.dev.yaml down -v

api:
	turbo run dev --filter=api --filter=deploy

deploy:
	turbo run dev --filter=deploy