function maxarray(arr,num){
    //initialize the max variazle
    let  max=-Infinity;
    for(let i=0;i<arr.length-num+1;i++){
        let temp=0;
        for(let j=0;j<num;j++){
            console.log(i,j);
            temp+=arr[i+j];
            console.log( temp);
        }
        if(temp>max){
            max=temp;

        }
    }
    return max;
    // forl loop to go thruoght the arr fromfirst o last
    //intialize temp variable
    //for loop to get the sum of limited indexeses
    //compare he max variable and rh
}

console.log(maxarray([1,2,3,4],2));