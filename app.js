const express=require("express");
const bodyParser=require("body-parser");

const app=express();

let items=["Buy food","Cook food","Eat the food"];
let workItems=[];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/",function(req,res){
      
     res.render("index",{listTitle:day,newListItems:items});
})



app.post("/",function(req,res){

    
    let item=req.body.NewItem;
    if(req.body.list==="Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
     
   
   
})



app.get("/work",function(req,res){
    res.render("index",{listTitle:"Work List",newListItems:workItems});
})

app.post("/work",function(req,res)
{
    let item=req.body.NewItem;
    workItems.push(item);
    res.redirect("/work");
})





app.listen(3000,function(){
    console.log("Server is running at port 3000.");
})