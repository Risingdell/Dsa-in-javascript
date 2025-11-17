const { log } = require("console");

function duplicate(arr){
    arr.sort((a,b)=>{return a-b});
    let left=0;
    let right=left+1;
    while(right<arr.length){
        if(arr[left]===arr[right]){

            right++;
        }
         else if(arr[left]!==arr[right]){
            left++;

            arr[left]=arr[right];
            right++;


        }


    }
    for(let i=arr.length-1;i>left;i--){
        arr.pop();
    }




    console.log(arr);

}

duplicate([2,3,4,1,1,2,3,33]);


