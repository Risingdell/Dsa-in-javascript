function pivot(arr,start=0,end=arr.length-1){
    function swap(arr,i,j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

    }
    let pivot=arr[start];
    let swapIndex=start;
    for(let i=start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
            console.log(arr);

              }

    }
    swap(arr,start,swapIndex);

    return arr;

}

console.log(pivot([5,3,7,4,1,7,8,9]));
