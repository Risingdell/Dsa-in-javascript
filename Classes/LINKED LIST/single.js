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
    pop(){
        if(!this.head){
            return  undefined;

        }
        let current=this.head;
        let pre=current;
        while(current.next){
            pre=current
           current=current.next;


        }
        this.tail=pre;
        this.tail.next=null;

        this.length--;

        console.log(`the deleted element is:${current.value}`);


    }
    push(val){
        let newNode=new node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
    }

    print(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.value)
            current=current.next;



        }
        return `${result} and length ${this.length}`;

    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        console.log(`the shifted element is=${current.value}`);
        this.head=current.next;
        this.length--;
        if(this.length==1){
            this.tail=null;
        }
        return  this.length;


}
}

let first=new SinglrLinkedList();
first.push("ur me");
first.push("hbdcs");
first.push("dhnau")
first.push("chammu")
first.pop();
first.shift();
first.shift();
first.shift();
console.log(first.print());