let arr=[6,7,5,3,1,9,5,4,6,7,4,4];

function ass(a,b){
    return a-b;
}

function des(a,b){
    return b-a;
}


console.log(arr.sort(ass));

console.log(arr.sort(des));

