function odd(nums){
 let arr=[];
 function helper(helpernums){
    if(helpernums.length===0){return 0;}
    if(!((helpernums[0]%2)===0)){
        arr.push(helpernums[0]);
    }
    helper(helpernums.slice(1))
 }
 helper(nums)
 return arr;
}

console.log(odd([1,2,3,4,5,6]));
