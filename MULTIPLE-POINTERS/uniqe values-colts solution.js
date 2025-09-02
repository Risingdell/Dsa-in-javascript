function uni(arr){
    arr.sort((a,b)=>{
        return a-b;
    });
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]

        }
    }
    console.log(arr);

    d=i+1

    for(k=0;k<=arr.length-d;k++){
        console.log(arr[k]);
    }

}
uni([3,5,2,5,6,67,6,2,3]);
