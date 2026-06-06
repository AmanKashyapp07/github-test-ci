#include <iostream>
#include <cassert>

int add(int a, int b) {
    return a + b;
}

int main() {
    // Run simple unit tests
    assert(add(2, 3) == 5);
    assert(add(-1, 1) == 0);
    std::cout << "All C++ assertions passed successfully!" << std::endl;
    return 0;
}
