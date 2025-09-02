function mergearr(arr1,arr2){
    let result=[];
    let low1=0;
    let low2=0
    let high=(arr1.length+arr2.length)-1
    while(low1<arr1.length && low2<arr2.length){
        if(arr1[low1]<arr2[low2]){
            result.push(arr1[low1]);

            low1++;
        }else{
            result.push(arr2[low2]);

            low2++;
        }

    }
    while(low1<arr1.length){
        result.push(arr1[low1]);
        low1++;
    }
    while(low2<arr2.lenggth){
        result.push(arr2[low2]);
        low2++;
    }
    return result;
}

console.log(mergearr([2,3,4,9],[1,5,6,7]))