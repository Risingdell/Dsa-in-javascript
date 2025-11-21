function threeSumClosest(arr,target){
    let result=[];
    arr.sort((a,b)=>{return a-b});
    let sum=0;
    let firstEle=0;
    let secondEle=0;
    let thirdEle=0;

    let closest=Infinity;
    let map={};
    for(let i=0;i<arr.length-2;i++){
        let left=i+1;
        let right=arr.length-1;
        while(left<right){
            sum=arr[i]+arr[left]+arr[right];
            if(Math.abs(sum-target)<Math.abs(closest-target)){
                firstEle=arr[i];
                secondEle=arr[left];
                thirdEle=arr[right];
                closest=sum;

            }
            if(sum<target){
                left++;
            }else if(sum>target){
                right--;
            }else{
                console.log(`${sum} is equal to ${target} `);
            }


        }

    }
    console.log(closest,`the element causing this are${firstEle}+${secondEle}+${thirdEle}`);

}
threeSumClosest([4,7,8,9,1,3],10)