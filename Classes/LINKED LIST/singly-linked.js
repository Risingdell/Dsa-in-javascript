class node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class SinglrLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    push(val){
        let newnode=new node(val);
        if(!this.head){
            this.head=newnode;
            this.tail=this.head;
        }else{
        this.tail.next=newnode;
        this.tail=newnode;

        }
        this.length++;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        let nextTail=current;
        while(current.next){
            nextTail=current;
            current=current.next;
        }
        this.tail=nextTail;
        this.tail.next=null;
        this.length--;
        if(this.length==0){
            this.tail=null;
            this.head=null;
        }

    }
    shift(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        this.head=current.next;
        this.length--;
    }
    print(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.value)
            current=current.next;


        }
        return `the list items are ${result} and the count is ${this.length}`

    }


}

let first=new SinglrLinkedList();

first.push("1");
first.push("2");
first.push("3");
first.push("5");
first.pop();
first.pop();
first.shift();
console.log(first.print());
