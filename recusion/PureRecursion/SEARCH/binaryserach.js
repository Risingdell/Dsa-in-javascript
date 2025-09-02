function search(arr,target){
    let arr1=arr.sort((a,b)=>{return a-b});
    let low=0;
    high=arr1.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr1[mid]==target){
            return mid;
        }else if(target>arr1[mid]){
            low=mid+1;
        }else {
            high=mid-1;
        }
    }
    return -1
}
console.log(search([9,8,7,5,4,3,2,1],1));