function maxsub(arr,k){
    if(k<=0 && k>arr.length-1 )return false;
    let max=-Infinity;

    for(let i=0;i<arr.length;i++){
        let currentsum=0;


        for(let j=i;j<i+k;j++){
            currentsum+=arr[j];
        }
        if(currentsum>max){
            max=currentsum;
        }
    }
    return max;


}
console.log(maxsub([2, 3, 5, 2, 9, 7, 1],3))