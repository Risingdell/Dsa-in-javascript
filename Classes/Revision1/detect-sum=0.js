function sum(arr1){
    let left=0;
    let right=arr1.length-1;
    let sum=0;
    while(left<right){
        sum=arr1[left]+arr1[right];

        if(sum==0){
            return [arr1[left],arr1[right]];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }

    }
    return undefined;



}
console.log(sum([0,0,1,2,3,4,5,6,7]));