function find(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }

    }
    return -1;
}


console.log(find([2,4,5,6,7,8,9],6));