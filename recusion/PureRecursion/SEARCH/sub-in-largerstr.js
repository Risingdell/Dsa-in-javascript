// function sub(str,target){
//     let result=0;

//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<target.length;j++){
//             console.log(str[i+j],target[j]);
//             if(!(target[j]===str[i+j])){
//                 console.log("break");
//                 break;

//             }
//             if(j===target.length-1){
//                 console.log(
//                 "found"
//                 );
//                 result++;
//             }
//         }

//     }
//     return result;
// }
// console.log(sub("omgomgomgomg","omg"))


function search(str,target){
    let result=0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<target.length;j++){
            console.log(str[i+j],target[j]);
            if(!(target[j]===str[i+j])){
                console.log("brak");
                break;

            }
            if(j===target.length-1){
                result++;
            }
        }
    }
    return result;
}
console.log(search("omgomgomgomg","omg"))