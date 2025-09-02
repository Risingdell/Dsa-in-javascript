function binary(arr,target){
    arr.sort((a,b)=>{return a-b});
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===target){
            return mid;

        }else if(target<arr[mid]){
            high=mid-1;


        }else if(target>arr[mid]){
            low=mid+1;
        }


    }
    return -1;
}
//let arr=[7,6,5,4,3,2,1]1,2,3,4,5,6,7
console.log(binary([7,6,5,4,3,2,1],3));