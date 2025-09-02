/*function cad(n){
    for(let i=0;i<=n;i++){
        console.log(i);

    }
    console.log("done and dowm to start ");
    for(let j=n;j>=0;j--){
        console.log(j);
    }
}
cad(5);
arror=(n)=>{
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            console.log(i,j);
        }
    }

}
arror(6);


function logatleast(n){
    for(let i=0;i<=Math.min||max(5,n);i++){
        console.log(i);
    }
}
logatleast(10)*/


function addbynewarray(arr){
    let newarray=[];
    for(let i=0;i<arr.length;i++){
        newarray.push(2*arr[i]);


    }
    console.log(newarray);
}

addbynewarray([2,4,5,6,7,2,3,4,8]);