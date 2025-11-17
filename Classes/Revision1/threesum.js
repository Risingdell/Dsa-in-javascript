function threesum(arr){
    let sum=0;
    let result=[];
    arr.sort((a,b)=>{return a-b});
    for(let i=0;i<arr.length-2;i++){
        if(i>0 && arr[i]===arr[i-1])continue;

        let left=i+1;
        let right=arr.length-1
        while(left<right){
            sum=arr[i]+arr[left]+arr[right];
            if(sum==0){
                result.push([arr[i],arr[left],arr[right]]);

                while(arr[left]===arr[left+1])left++;
                while(arr[right]===arr[right-1])right--;
                left++;
                right--;

            }
            else if(sum>0){
                right--;
            }else{
                left++;
            }
        }

    }
    console.log(result);
}
threesum([-4, -1, -1, 0, 1, 2]);