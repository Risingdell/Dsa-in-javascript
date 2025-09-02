
const pat=(n)=>{

    for(let i=1;i<=n;i++){
       let pat=(`${i}`).repeat(i)+"\t#\t".repeat(i);
        console.log(pat);
    }
}

pat(4);