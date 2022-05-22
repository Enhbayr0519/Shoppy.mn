#include<iostream>
#include<stdio.h>
using namespace std;

int main() {
	
	int num1, num2;
	int add, sub, mul, div;
	char n;
	 
	// Random 1st number
	cout<<"Enter a value: ";
	cin>>num1;
	cin>>n;
	cin>>num2;
	
	switch(n) {
		case '+':
			add = num1 + num2;
			cout<<"result : "<<add;
			break;
		case '-':
			sub = num1 - num2;
			cout<<"result : "<<sub ;
			break;
		case '*':
			sub = num1 * num2;
			cout<<"result : "<<sub ;
			break;
		case '/':
			sub = num1 / num2;
			cout<<"result : "<<sub ;
			break;
		default: 
			cout<<"Invalid Characters"<<endl;
			break;
	}
}

