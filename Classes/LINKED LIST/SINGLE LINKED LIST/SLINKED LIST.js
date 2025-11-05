class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class singlyList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        const newnode =new node(val);
        if(!this.head){
            this.head=newnode;
            this.tail=newnode;
            this.length++;

        }else{
            this.tail.next= newnode;
            this.tail=newnode;
            this.length++;
        }
    }
}
let elements= new singlyList();
elements.push("hello");
elements.push("hi");
elements.push("done");
console.log(elements);
