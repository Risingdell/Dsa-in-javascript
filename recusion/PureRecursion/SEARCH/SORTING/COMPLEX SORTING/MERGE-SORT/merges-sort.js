function merge(arr1,arr2){

    let result=[];
    let low1=0;
    let low2=0;
    while(low1<arr1.length && low2<arr2.length){
        if(arr1[low1]<arr2[low2]){
            result.push(arr1[low1]);
            low1++;
        }else{
            result.push(arr2[low2]);
            low2++;
        }
    }
    while(low1<arr1.length){
        result.push(arr1[low1]);
        low1++;
    }
    while(low2<arr2.length){
        result.push(arr2[low2]);
        low2++;
    }
    return result;
}

function mergsort(arr){
    if(arr.length<=1)return arr;
    let mid=Math.floor(arr.length/2);
    let left=mergsort(arr.slice(0,mid));
    let right=mergsort(arr.slice(mid));
    return merge(left,right);

}

console.log(mergsort([8,4,6,1]));