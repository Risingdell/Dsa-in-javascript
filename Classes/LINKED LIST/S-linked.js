class node{
    constructor(val){
        this.valu=val;
        this.next=null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newnode= new node(val);
        if(this.head===null){
            this.head= newnode;
            this.tail=this.head;



        }else{
            this.tail.next=newnode;
            this.tail=newnode;
        }

    }
}

let first= new SinglyLinkedList();
first.push("hello");

first.push("hi");
console.log(first);

let second= new SinglyLinkedList();


