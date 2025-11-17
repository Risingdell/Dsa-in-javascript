// function unique(arr){
//     const map={};
//     let result=[];

//     for(let i=0;i<arr.length;i++){
//         let key=arr[i];
//         map[key]=(map[key]||0)+1

//     }
//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i];
//         if(map[ele]===1){
//             result.push(ele);

//         }
//     }

//     console.log(result);
// }

// unique([1,2,3,43,12,3,1,2]);

function unique(arr){
    arr.sort((a,b)=>{
        return a-b;
    });
    let result=[];
     let i=0;
     for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
            result.push(arr[i]);

        }
     }
     console.log(result);

}
unique([1,3,4,5,6,3,2,1]);