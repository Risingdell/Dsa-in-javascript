function smae(arr1,arr2){



        const ob={}
        const final={}
    if(arr1.length==arr2.length){
    for(let i=0;i<=arr1.length-1;i++){

        let lett=arr1[i];
        ob[lett]=(lett*lett);






        }
        console.log(ob);
        for (let i=0;i<=arr2.length-1;i++){
            let ele=arr2[i];

            if(Object.values(ob).includes(ele)){
                console.log(`the number is ${ele} `);
            }else{
                return false;
            }
    }
}
}

smae([2,4,3],[16,4,9]);


//an for loop
 //loop throught the arr 1 and assign the square
    // an if consition to check if it get works
    //if it works return statement
/*for (let char in ob){

            if(arr2[char]===ob[char]){
                console.log(`the number is ${char} is ${ob[char]}`);
            }else{
                return false;
            }*/