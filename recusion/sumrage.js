function range(num){
    if(num===1)return 1;
    console.log(num);
    return num+range(num-1);

}
console.log(range(10));
