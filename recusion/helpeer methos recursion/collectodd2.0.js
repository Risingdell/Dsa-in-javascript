function getOdd(n){
    let result=[];
    function helper(nums){
        if(nums.length==0){return 0};
        if(!((nums[0]%2)==0)){
            result.push(nums[0]);
        }
        helper(nums.slice(1));
    }
    helper(n)
    return result;
}

console.log(getOdd([1,2,3,4,5,6,7,8,9]));