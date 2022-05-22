#include<iostream>
using namespace std;

int main() {
	string name, gender, education, quest;
	int age;
	
	cout<<"Thank you for visiting us."<<endl;
	cout<<"Are you sure you want to job?"<<endl;
	cout<<"Yes or No"<<endl;
	cin>>quest;
	
	if(quest == "yes" || "Yes") {
		// Name	
		cout<<"Welcome to my team"<<endl;
		cout<<"  "<<"YourName: ";
		cin>>name;
		
		// Age
		cout<<"  "<<"YourAge: ";
		cin>>age;
		
		// Gender
		cout<<"  "<<"YourGender: ";
		cin>>gender;
		
		// Education
		cout<<"  "<<"YourEducation: ";
		cin>>education;
		
		// Employee importmation
		cout<<"         "<<"Employee name: "<<name<<"   ";
		cout<<"Employee age: "<<age<<endl;
		cout<<"         "<<"Employee gender: "<<gender<<"   ";
		cout<<"Employee education: "<<education;
	} else if(quest == "no" || "No") {
		cout<<"Thank you for visiting us.";
	} else {
		cout<<"Only Yes or No!";
	}
}
