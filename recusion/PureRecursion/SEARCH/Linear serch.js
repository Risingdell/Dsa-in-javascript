/*function linearSearch(arr,target){
    arr.map((a)=>{(a===target)?  console.log(arr.indexOf(target)): -1})
}
linearSearch([1,2,3,4,5,6,7,8,9],7)
*///not really searching it is transforming

function linse(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }

    }return -1;
}
console.log(linse([1,2,3,4,5,6,7,8,9],7))