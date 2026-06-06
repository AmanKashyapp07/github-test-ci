all: math_app

math_app: math.cpp
	g++ -O3 math.cpp -o math_app

test: math_app
	./math_app
	tar -czf app.tar.gz math_app
