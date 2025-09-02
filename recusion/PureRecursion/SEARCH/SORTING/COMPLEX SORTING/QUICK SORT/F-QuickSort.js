
  let swaps=0;
    let com=0;

function findPivot(arr,start,end){

    function swap(arr,i,j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        swaps++;


    }

    let pivot=arr[start];
    let swapingIndex=start;
    for(let i=start+1;i<=end;i++){
        //console.log(pivot,arr[i]);
        com++;
        if(arr[i]<pivot){
            swapingIndex++;



            swap(arr,swapingIndex,i);
           // console.log(arr);
        }
    }
    //console.log("=================================")
    swap(arr,start,swapingIndex);
    return  swapingIndex;


}

function pivot(arr,left=0,right=arr.length-1,k){
         var count=0;


    if(left<right){

        let index=findPivot(arr,left,right);
        if(index===k){
            return arr[index];
        }else if(k<index){
            return pivot(arr,left,index-1,k);

        }else if(k>index){
                    return pivot(arr,index+1,right,k);


        }




    }

    return arr;
}
let arr=[5,3,7,4,1,7,8,9];
let k=4
let kth=pivot(arr,0,arr.length-1,k)
console.log(kth);

console.log(`the no. of swapig is :${swaps}`);
console.log(`the no.of comparsions is:${com}`);
console.log(arr);
