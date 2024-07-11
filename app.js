import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
const app=express();
const PORT=process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/blog",(req,res)=>{
    // console.log(req.body);
    if(req.body.todo=="start blogging"){
        res.render("writeblog.ejs");
    }
    else{
        res.render("blog.ejs",{
            ct:arr,
            nm:name
        });
    }
});
const arr=[];
const name=[];
let count=0;
app.post("/post",(req,res)=>{
    // console.log(req.body);
    const content=req.body.blog;
    let heading=req.body.head;
    // console.log(content);
    let t=req.body.post;
    // console.log(t);
    
    
    // console.log(t);
    if(t=="post"){
        arr.push(req.body.blog);
        // count++;
        name.push(heading);
        res.render("writeblog.ejs",{
            post:content,
            head:heading
        });
    }
    else{
        res.render("blog.ejs",{
            ct: arr,
            nm: name
        });
    }
});
app.post("/new",(req,res)=>{
    res.render("writeblog.ejs");
});
app.post("/blg",(req,res)=>{
    let obj=req.body.index;
    // console.log(obj);
    let i;
    for(i=0;i<name.length;i++){
        if(name[i]==obj){
            break;
        }
    }
    let content=arr[i];
    res.render("posts.ejs",{
        hd:obj,
        cnt:content
    });
})

app.get("/home",(req,res)=>{
    // console.log(req.body);
    res.render("index.ejs");
})

app.get("/new",(req,res)=>{
    res.render("writeblog.ejs");
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})