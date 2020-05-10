build:
	docker build -t next/tutorial:1.0 .

run:
	docker run --rm -d -p 3000:3000 next/tutorial:1.0
