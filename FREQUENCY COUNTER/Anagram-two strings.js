function anagram(str1,str2){

let ob1={};
let ob2={};

if(str1.length===str2.length){
for(let char of str1){
    ob1[char]=(ob1[char]||0)+1;
}
for(let char of str2){
    ob2[char]=(ob2[char]||0)+1;
}

for( let word in ob1){
    if(!(ob1[word]===ob2[word])){
        return false;
    }

}
return true;
}
return false;

}

console.log(anagram("anagram","naggama"));