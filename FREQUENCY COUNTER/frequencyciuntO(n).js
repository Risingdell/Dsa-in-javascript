const same=(arr1,arr2)=>{
    if(arr1.lenght!==arr2.lenht){
        return false;

    }
    let ob1={};
    let ob2={};
    for(let char of arr1){
        ob1[char]=(ob1[char]|| 0)+1;

    }
    for(let char of arr2){
        ob2[char]=(ob2[char]|| 0)+1;

    }

    for(let num in ob1){
        let square=(num**2);
        if(!(square in ob2)){
            return false;
        }
        if(!(ob2[square]==ob1[num])){
            return false;
        }

    }
    return true;


}

console.log(same([2,4],[4,16]));