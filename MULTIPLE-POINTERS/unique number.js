function unique(arr){
    let  store=[];
    let tostore=[];

    //anf or loop to go through the  array to get count
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(!(arr[i] in store)&& arr[i]!==arr[j]){
                store.push(arr[i]);
            }



        }



    }
for(let i=0;i<store.length;i++){


            if(!(store[i] in tostore)&& (store[i]!==store[i-1])){

                tostore.push(store[i])

            }

        }
        console.log(tostore);
}
unique([1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7]);