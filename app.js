const express=require("express");
const app=express();
const port=3000;
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("form")
})
app.post("/submit",(req,res)=>{
  const{name,email}=req.body;
    res.render("confirm",{name,email})
})


app.listen(port,(error)=>{
    if(error){
        console.log("error opening server")
        return;
    }
    console.log(`server running on port ${port}`)
})