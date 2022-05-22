#include<iostream>
using namespace std;

int main() {
	int n;
	cout<<"Enter a number: ";
	cin>>n;
	
	int num = n;
	int rev = 0;
	
	while(n!=0) {
		rev = rev*10 + (n%10);
		n = n/10;
	}
	
	cout<<"Reversed number is: "<<rev<<endl;
	
	if(num == rev) {
		cout<<"The number you entered is a palindrome"<<endl;
	} else {
		cout<<"The number you entered is a not palindrome"<<endl;
	}
}
