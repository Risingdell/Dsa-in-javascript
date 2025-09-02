function getOdd(num){
    let newArr=[];
    if(num.length===0){ return newArr}
    if(!((num[0]%2)===0)){
        newArr.push(num[0]);

    }
    newArr=newArr.concat(getOdd(num.slice(1)));
    return newArr
}

console.log(getOdd([1,2,3,4,5,67,8,9]))