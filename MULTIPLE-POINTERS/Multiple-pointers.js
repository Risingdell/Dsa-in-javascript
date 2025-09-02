
function find(num){
    let left=0;
    let right=num.length-1;
    while(left<right){
        sum=num[left]+num[right];
        if(sum===0){
            console.log([num[left],num[right]]);
        }else if( sum>0){
            right--;
        }else{
            left++;
        }
    }

    //for lop to check from the left

    //another from the right
    //summ=a[i]+b[] if sum >0 right-- else left++

        }




console.log(find([-2,-1,0,1,2,3]));