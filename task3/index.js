const express = require("express");
const app = express();


app.get("/fortunes" , ( req,res) => {
 const fortunes=["success is closer than you think!",
                " Adventure is waiting for you "
    ];
    res.send(fortunes);
});
 
app.get("/joke" , (req,res)=>{ 
    const funjoke =[ "I told my computer I needed a break. Now it won’t stop sending me Kit-Kats"];
     res.send(funjoke);
})

app.get("/facts" ,(req,res) => {
   const randomfacts=["Sloths can hold their breath longer than dolphins. They can hold their breath for up to 40 minutes!",
                 "A blue whale's heart is the size of a small car"
   ];
    res.send(randomfacts);
})



app.listen( 3000 ,() => {
    console.log(" listen on port 3000");
});