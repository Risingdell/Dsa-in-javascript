function count(str){
let arr=str.split("");

let total={};
for(let i=0;i<arr.length;i++){
    let char=arr[i];
    console.log(total);

    if(total[char]){
        total[char]++;
        console.log(total);
    }else{
        total[char]=1;
    }
}
for(let char in total){
    console.log(`the count of the ${char} is${total[char]} `);
}

}


count("wwwwwwhhhh");