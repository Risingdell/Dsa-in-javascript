
function anagram(str1,str2){
    if(str1.length===str2.length){
        let lokup={};//object
    for(let char of str1){
        let letter=char;
        lokup[letter]?(lokup[letter]+=1):lokup[letter]=1;


    }
    console.log(lokup);//inset string1 into object
for(let i=0;i<str2.length;i++){
    let letter=str2[i];
    console.log(str2[i])

    if(!(lokup[letter])){
        return false;
    }else{

        lokup[letter]-=1;


        console.log(lokup)
    }


   }

    //an for loop to check the object
    // if string 2 hase element in object then decrese count o the element by 1 else return false
    }


}


console.log(anagram("anagram","naggama"));