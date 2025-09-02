function count(str){
    const ob={};
    for(let i=0;i<str.length-1;i++){
        let letter=str[i]
    if(str[i] !==" "&& str[i] !=="/"){
        if(ob[letter]){
            ob[letter]++;
        }else{
            ob[letter]=1;
        }
    }

    }
    console.log(ob);
;}

count("kvkhvv   khvcv  /  / shhsbh");