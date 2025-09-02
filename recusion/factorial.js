/*function factorial(num){
    let total=1;
    if(num==0||num==1){
        return total;
    }

    for(let i=num;i>=2;i--){

        total*=i;
    }
    console.log(total);
}
factorial(7)*/
function factorial(num){
    let total=1
    if(num==0|| num==1){
        return total;
    }else{
        return num*factorial(num-1);
    }
}
console.log(factorial(10))