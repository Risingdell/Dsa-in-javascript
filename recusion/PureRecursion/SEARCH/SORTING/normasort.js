function sorting(arr){
     arr.sort((a,b)=>{return a-b});
     console.log(arr);
 }
 sorting([8,7,6,5,4,5,3,2,1,2,3,4,5,5,6,7,8,8,9]);

function sorting(str){
    str.sort((a,b)=>{return a.length-b.length});
    console.log(str);
}
sorting(["ccacac","dqqed","acasqdqqqd","scqscas","cc"])