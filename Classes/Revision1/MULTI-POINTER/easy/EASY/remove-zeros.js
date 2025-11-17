function removeZero(arr){

    let insertEle=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[insertEle]=arr[i];
            insertEle++;

        }

    }
    while(insertEle<arr.length-1){
        arr[insertEle]=0;
        insertEle++;
    }
    console.log(arr);


}

removeZero([2,0,6,0,84,0,3,2,5,0])