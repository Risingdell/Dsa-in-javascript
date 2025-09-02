
function twosum(arr,target){
    let map={};
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=i
    }
    for(let i=0;i<arr.length;i++){
        let needed=target-arr[i];
        let k=map[needed];

        if(map[needed]!==undefined ){
            console.log(k,arr[i]);
        }
    }

}

twosum([10,20,30,40,50],50)