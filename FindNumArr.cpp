#include<iostream>
using namespace std;

int main() {
	int first_arr[] = {1,2,3,4,5}, second_arr[] = {2,1,3,0,5};
	for(int i = 0; i<5; i++){
		int j;
		for(j = 0; j<5; j++){
			if(second_arr[i] == first_arr[j]) break;
			cout<<second_arr[i]<<first_arr;
		}
		if(j == 5) cout << second_arr[i];
	}
}
