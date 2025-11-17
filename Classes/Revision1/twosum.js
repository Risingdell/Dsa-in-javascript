function twosum(arr,target){
    let sum=0;
    let result=[];
    let map={};
    arr.sort((a,b)=>{return a-b});
    let left=0;
    let right=arr.length-1;
    while(left<right){
        sum=arr[left]+arr[right];
        if(sum===target){
            result.push([arr[left],arr[right]]);
            left++;
            right--;

        }
        else if(sum>target){
            right--;
        }else{
            left++;
        }

    }
    console.log(result);
}

twosum([10,30,20,40,10],50);