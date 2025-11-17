// isSubsequence(str1, str2)
// Check if str1 is a subsequence of str2
function subseq(str1,str2){
    let j=0;
    let i=0;
    while(j<str2.length-1){
        if(str1[i]===str2[j]){
            i++;
        }
        if(i===str1.length-1){
            return true;
        }
        j++;
    }
}

console.log(subseq("abggz","ahbgdc"));