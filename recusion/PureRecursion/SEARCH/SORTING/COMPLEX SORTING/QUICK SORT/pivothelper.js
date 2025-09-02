function findpivot (arr,start,end){
    function swap(arr,i,j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }

    let pivot=arr[start];
    let swapIndex=start;
    for(let i=start+1;i<=end;i++){
    if(arr[i]<pivot){
        swapIndex++;
        swap(arr,swapIndex,i);
    }


    }
    swap(arr,swapIndex,start);
    return swapIndex;

}



function pivot(arr,left=0,right=arr.length-1){
    if(left<right){
    let index= findpivot(arr,left,right);
    console.log(index);

    pivot(arr,left,index-1)
    pivot(arr,index+1,right);
    }
    return arr;
}
console.log(pivot([5,3,7,4,1,7,8,9]));

