clean:
	rm -rf dist/
	mkdir dist

copy-static:
	cp static/* dist
	cp node_modules/@aetnadigital/anatomy/anatomy.css dist/

compile:
	npx webpack

build: clean copy-static compile