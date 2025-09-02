function insertion(arr){
    for(var i=1;i<arr.length;i++){
        let current=arr[i];
        for(var j=i-1;j>=0 && arr[j]>current;j--){
            console.log(arr);
            console.log(arr[j],arr[j+1])
            arr[j+1]=arr[j];
            console.log(arr);
            }
            arr[j+1]=current;
            console.log(arr);
    }
    console.log(arr);
}
insertion([9,7,6,5,4,3,2,1]);