install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
index:
	node bin/index.js
brain-gcd:	
	node bin/games/brain-gcd.js
brain-prog:
	node bin/games/brain-progression.js
brain-prime:
	node bin/games/brain-prime.js