function long(str){
    let key=[];
    let max=[];

    for(let i=0;i<str.length;i++){

        for(let j=i+1;j<str.length;j++){
            if(str[i] in key){
                max=key;

            }else{
                key.push(str[i]);


            }
        }


    }
    console.log(key);
    console.log(max);

}
long("smallest")