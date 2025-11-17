function sort(arr1,arr2){
    arr1.sort((a,b)=>{return a-b})
    arr2.sort((a,b)=>{return a-b});
    let firstarr=0;
    let secondarr=0;
    let result=[];
    while(firstarr<arr1.length-1 && secondarr<arr2.length-1){
        if(arr1[firstarr]<=arr2[secondarr]){
            result.push(arr1[firstarr]);
            firstarr++;

        }else if(arr1[firstarr]>=arr2[secondarr]){
            result.push(arr2[secondarr]);
            secondarr++;
        }


    }
    while(firstarr<arr1.length-1){
        result.push(arr1[firstarr]);
        firstarr++;
    }
    while(secondarr<arr2.length-1){
        result.push(arr2[secondarr]);
        secondarr++;
    }
    console.log(result);
}

let nums1 = [1, 2, 2, 3, 0, 0, 0]
let nums2 = [2, 2, 4]
sort(nums1,nums2);