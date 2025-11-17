function palindrome(str){
    const splited=str.split("");
    let left=0;
    let right=splited.length-1;
    let mid=Math.floor((splited.length)/2);
    while(left< mid && right>mid){
        if(splited[left]!==splited[right]){
            return false;
        }
        left++;
        right--;

    }
    return true;
}
console.log(palindrome("maham"));