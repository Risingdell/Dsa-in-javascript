// function buubleso(arr){
//     for(let i=arr.length;i>=0;i--){
//         for(let j=0;j<i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }

//         }
//     }
//     console.log(arr);
// }

// buubleso([7,8,9,4,5,3,4,5,6,6,4,35,55,7,2,3,4,56,6,7,89,34])

function bubble(arr){
    console.log(arr.length+"v cvhd");
    for(let i=arr.length;i>=0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}

bubble([9,7,6,5,4,3,2,1]);