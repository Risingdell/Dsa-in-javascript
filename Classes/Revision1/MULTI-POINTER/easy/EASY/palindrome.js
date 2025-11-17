function palindrome(str){
    if(str.length===1||str.length===0){return true};
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]===str[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
}
console.log(palindrome("hah"));