function reverse(str){
    let left=0;
    let right=str.length-1;
    let result=[];
    let newstr="";

  for(let i=0;i<=str.length-1;i++){
   result.push(str[i]);

  }
    while(right>=0){
        let last=result[right];
        newstr+=last;
        right--;
    }
    return newstr;
}
console.log(reverse("dhanushm"));