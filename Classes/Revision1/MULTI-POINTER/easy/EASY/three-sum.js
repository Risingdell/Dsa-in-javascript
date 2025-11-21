function Threesum(arr,target){
    arr.sort((a,b)=>{return a-b});
    let left=1;
    let right=arr.length-1;
    let result=[];
    for(let i=0;i<arr.length;i++){
        left=i+1;
        right=arr.length-1;

        while(left<right){
            let cors=arr[i]+arr[left]+arr[right];
            if(cors===target){
                result.push([arr[i],arr[left],arr[right]]);
                left++;
                right--;

            }else if(cors<target){
                left++;
            }else{
                right--;
            }

        }
    }
    return result;
}

console.log(Threesum([1,4,3,8,5,2],7));