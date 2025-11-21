function fourSum(arr,target){
    arr.sort((a,b)=>{return a-b});
    let replace=0;
    let i=0;
    while(i<arr.length){
        if(arr[i]!==arr[i+1]){
            arr[replace]=arr[i];
            replace++;
        }
        i++;
    }
    arr=arr.slice(0,replace);
    console.log(arr);
}
fourSum([2,3,5,7,3,2,1,1,9],10)