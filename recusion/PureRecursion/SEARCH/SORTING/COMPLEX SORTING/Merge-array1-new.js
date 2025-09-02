function merge(arr1,arr2){
    let low1=0;
    let low2=0;
    let result=[];
    while(arr1.length>=0 &&arr2.length>0){
        if(arr1[0]<arr2[0]){
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift())
        }
    }

    return result.concat(arr1,arr2);

}
console.log(merge([2,3,4,9],[1,5,6,7]))