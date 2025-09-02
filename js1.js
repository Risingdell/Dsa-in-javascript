function sum(n){
return n*(n+1)/2;
}
let t1=performance.now();
sum(50000000);
let t2=performance.now();
console.log((t2-t1)/1000);




/*
function sum(n){
    let to=0;
    for(let i=0;i<n;i++){
        to+=i;

    }
    console.log(to);
}
function crashcode(){
    let virus =0;
    while(true){
       virus+=1;
       console.log(virus);


    }
}
*/