function findSum(arr,target){
    let arr2=arr.sort((a,b)=>{
        return a-b;
    });
    let low=0;
    let high=arr2.length-1;
    let sum=0;
    while(low<high){
        sum=arr2[low]+arr2[high];
        if(sum==target){
            return [arr2[low],arr2[high]];

        }
        if(sum>target){
            high--;
        }
        if(sum<target){
            low++;
        }

    }
    return false
}

console.log(findSum([2,3,1,6,4,7,8],10));