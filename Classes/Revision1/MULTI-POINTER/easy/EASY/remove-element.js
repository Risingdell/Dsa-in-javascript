function removeelement(arr,target){
    let slow=0;
    let result=[];

    for(let fast=0;fast<arr.length;fast++){
        if(arr[fast]==target){
            [arr[slow],arr[fast]]=[arr[fast],arr[slow]];
            slow++;
        }

    }
   return slow;
}

 let arr = [3, 2, 2, 3]
let val = 3

let validindex=removeelement(arr,val);

console.log(arr.slice(validindex,arr.length));
