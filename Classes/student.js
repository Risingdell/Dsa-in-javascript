class student{
    constructor(fname,lname,year,tar){
        this.fname=fname;
        this.lname=lname;
        this.grade=year;
        this.tardis=0;
    }
     get(){
        return `the name is ${this.fname} ${this.lname}`;

    }

    absent(){
        this.tardis++;
        if(this.tardis>=3){
            console.log("your expelled!")

        }
        console.log(this.tardis)
    }

}
let std=new student("dhanush","krishna",6)
console.log(std.get());
std.absent();
std.absent();
std.absent();