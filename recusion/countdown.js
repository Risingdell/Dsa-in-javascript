function count(num){
    if(num<=0){
        let b="done";
        console.log(b);
        return ;
    }
    console.log(num);
    num--
    count(num);
}
count(10)