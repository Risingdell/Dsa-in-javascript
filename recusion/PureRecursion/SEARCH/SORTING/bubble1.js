function bubble(arr){
    for(let i=arr.length;i>=0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    console.log(arr);
}
bubble([9,8,7,6,5,4,3,2,1])