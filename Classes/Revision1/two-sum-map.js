function twosum(arr,target){
    let map={};
    let result=[];
    for(let i=0;i<arr.length-1;i++){
        map[arr[i]]=i;
    }
    for(let i=0;i<arr.length-1;i++){
        let needed=target-arr[i];
        if(map[needed]){
            result.push([needed,arr[i]]);
        }

    }
    console.log(result);


}
twosum([10,30,20,40,10],50);