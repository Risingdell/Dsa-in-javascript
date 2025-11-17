function intersection(arr1,arr2){

    let left=0;
    let right=0;
    let result=[]


    while(left<arr1.length && right<arr2.length){
        if(arr1[left]===arr2[right]){
            result.push(arr1[left]);
            left++;
            right++;
        }else if(arr1[left]<arr2[right]){
            left++;

        }else{
            right++;
        }

    }
    return [result];
}
console.log(intersection([1, 2, 2, 3, 4, 5],[2, 2, 3, 5, 6]))