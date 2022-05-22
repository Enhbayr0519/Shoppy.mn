#include<iostream>
using namespace std;

struct node {
	node * next;
	int data;
};
typedef struct {
	node *head;
	node *tail;
} list;
typedef struct node node;

void insert(list *li, int value){
	node *temp = new node;
	temp->data = value;
	temp->next = NULL;
	if(li->tail){
//		cout << "w";
		li->tail->next = temp;
		li->tail = temp;
	} else {
		li->head = temp;
		li->tail = temp;
	}
}
void print(list *li){
	node *ite = li->head;
	while(ite->next){
		cout << ite->data << "->";
		ite = ite->next;
	}
	cout << ite->data;
}

int main(){
	list li;
	li.head = NULL;
	li.tail = NULL;
	insert(&li, 10);
	insert(&li, 20);
	insert(&li, 30);
	insert(&li, 40);
	insert(&li, 50);
	insert(&li, 60);
	print(&li);
}
