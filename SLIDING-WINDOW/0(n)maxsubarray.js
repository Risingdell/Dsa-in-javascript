function max(arr,num){
    if(arr.length<num){
        return null;
    }
    let max=0;
    let temp=0;
    for(let i=0;i<num;i++){
        max+=arr[i];
    }
    temp=max;

    for(let i=num;i<arr.length;i++){
        temp=temp-arr[i-num]+arr[i];
        max=Math.max(temp,max);

    }
    return max;
}

console.log(max([1,2,3,4],2));