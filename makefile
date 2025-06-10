dev:
	npm run dev

down:
	docker-compose -f apps/deploy/docker-compose.dev.yaml down -v

api:
	turbo run dev --filter=api --filter=deploy

deploy:
	turbo run dev --filter=deploy

db-report:
	pgbadger /var/lib/postgresql/data/log/postgresql-*.log -o report.html

clean:
	rm -rf node_modules package-lock.json apps/api/node_modules apps/api/package-lock.json
	npm cache clean --force
	npm install --legacy-peer-deps
