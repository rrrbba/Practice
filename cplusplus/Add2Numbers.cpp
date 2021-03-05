#include <iostream>

using namespace std;

int main() {

    int firstInt;
    int secondInt;
    int sum, difference, product, quotient;
    

    cout << "Enter first integer: ";
    cin >> firstInt;
    cout << "Enter second integer: ";
    cin >> secondInt;

    sum = firstInt + secondInt;
    difference = firstInt - secondInt;
    product = firstInt * secondInt;
    quotient = firstInt / secondInt;

    cout << "The sum is: " << sum << endl;
    cout << "The difference is: " << difference << endl;
    cout << "The product is: " << product << endl;
    cout << "The quotient is: " << quotient << endl;

    return 0; 
}

// Getting the program to run (in windows)
//g++ -o Add2Numbers.exe Add2Numbers.cpp
//Then
//./Add2Numbers

//if the cpp file is in a folder the command becomes
//g++ -o Add2Numbers.exe cplusplus/Add2Numbers.cpp

//For mac use
//g++ -o Add2Numbers Add2Numbers.cpp

//g++ os the name of the GCC C++ compiler
//-o means option where you specify the output filename
//and Add2Numbers.cpp is the input source file