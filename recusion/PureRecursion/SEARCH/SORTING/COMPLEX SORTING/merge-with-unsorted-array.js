function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let current=arr[i];
        let j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=current;

    }
    return arr;
}
function merge(arr1,arr2){
    arr1=insertion(arr1);
    arr2=insertion(arr2);
    let result=[];
    let low1=0;
    let low2=0;
    while(low1<arr1.length && low2<arr2.length){
        if(arr1[0]<arr2[0]){
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift());
        }

    }
    return result.concat(arr1,arr2);
}

console.log(merge([8,5,3,2,7],[9,1,3,4,7]))