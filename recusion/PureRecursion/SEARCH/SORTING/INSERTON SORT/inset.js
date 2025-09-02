function insert(arr){
    for(var i=1;i<arr.length;i++){
        let current=arr[i];
        for(var j=i-1;i>=0 &&arr[j]>current;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=current;
    }
    return arr;
}
console.log(insert([9,7,6,5,4,3,2,1]));