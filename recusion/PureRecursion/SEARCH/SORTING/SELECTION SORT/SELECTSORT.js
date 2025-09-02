function selection(arr){
    for(let i=0;i<arr.length;i++){
        let index=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j;
            }
        }
        if(index!==i){
            let temp=arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
        }

    }
    console.log(arr);
}
selection([9,8,7,6,5,4,3,2,1])