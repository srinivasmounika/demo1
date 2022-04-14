
fetch('https://api.github.com/users').then((res)=>{
    res.json().then((data)=>{
        console.log(data);
        data.forEach((ele)=>{
            if(ele.id==18){
                console.log(ele.login
                    );
            }
        })
    })
})

     
//  

