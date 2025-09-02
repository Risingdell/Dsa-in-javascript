class node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}
class SinglrLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        var newNode=new node(val);
        if(!this.length){
            this.head=newNode;
            this.tail=this.head;

        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;

    }
}
let first=new SinglrLinkedList();
first.push("hello");
first.push("he");

console.log(first);