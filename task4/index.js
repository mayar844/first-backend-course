
const express = require("express");
const app=express();

app.use(express.urlencoded({extended:true}));
const arr =[{ name:"Mars", id :"1" , astronaut:"David" , status:"planned"},
   { name:"Mercury" , id:"2",astronaut:"Thomas",status:"active"},
   { name:" Venus", id:"3" , astronaut:"Charles",status:"completed"},
   {name:"Jupiter", id:"4", astronaut:"William",status:"cancelled"}
]
app.get("/missions",(req,res)=> {
    res.send(arr);
});

app.get("/mission/:id" ,(req,res)=>{
    const paramsId =req.params.id;
    for(let i=0 ; i< arr.length;i++){
        if( arr[i].id===paramsId){
           res.send(arr[i]);
        }
    } 
    res.send("mission not found");
});

app.post("/mission" , (req,res) => {
    console.log(req.body);
     arr.push(req.body);
     res.send("mission has been created");
    
});


app.put("/mission" ,(req,res) => {
    const data =req.body;
    data
    console.log(data);
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i].id===data.id){
            arr[i]=data;
            res.send("the mission status has been updated")
            
    

        }
        
    } res.send("mission not found");
    
});

app.delete("/mission/:id" ,(req,res) =>{
    const id =req.params.id;
    let newArr;
    for(let i =0;i<arr.length;i++  ){
        newArr=arr.filter((item) => item.id!==id)
        
    }
    res.send(newArr);
})


app.listen(3000 , ()=>{
    console.log("listen on port 3000");
});