#include<iostream>
using namespace std;

int main() {
	cout<<"Calculate volume of cube"<< endl;
	int cube;
	cout<<"Enter the size of 1 side: ";
	cin>>cube;
	cout<<"The volume is: "<<cube*cube*cube<<endl;
	
	cout<<"Calculate volume of cylinder"<< endl;
	int r, h;
	cout<<"Enter the radius of the cylinder: ";
	cin>>r;
	cout<<"Enter the height the cylinder: ";
	cin>>h;
	cout<<"The cylinder volume is: "<<r*r*h*3.14;
	
	cout<<"Calculate volume of rectangle"<< endl;
	int length, width, height;
	cout<<"Enter the length of the cylinder: ";
	cin>>length;
	cout<<"Enter the width the cylinder: ";
	cin>>width;
	cout<<"Enter the height the cylinder: ";
	cin>>height;
	cout<<"The cylinder volume is: "<<length*width*height;
	
	return 0;
}
