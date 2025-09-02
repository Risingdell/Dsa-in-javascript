function merge(arr1,arr2){
    let results=[];
    let low1=0;
    let low2=0;
    while(low1<arr1.length && low2<arr2.length ){
        if(arr1[low1]<arr2[low2]){
            results.push(arr1[low1]);
            low1++;
        }else{
            results.push(arr2[low2]);
            low2++;
        }
    }
    while(low1<arr1.length){
        results.push(arr1[low1]);

        low1++;
    }
    while(low2<arr2.length){
        results.push(arr2[low2]);
        low2++;
    }
    return results;
}
function mergesort(arr){
    if(arr.length<=1)return arr;
    let mid=Math.floor(arr.length/2);
    let left=mergesort(arr.slice(0,mid));
    let right=mergesort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergesort([9,6,4,6,2,8,3,9,1,9]));
