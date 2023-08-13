const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
app=express()
app.use(bodyparser.json())
app.listen(3000)
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/projectdb')
blogschema=mongoose.Schema(
    {
        title:String,
        creator:String,
        imgurl:String,
        content:String,
        topics:[]
    }
)
blogmodel=mongoose.model('blog',blogschema)
app.post('/blog',function(req,res)
{

    a=req.body.titleofblog
    b=req.body.con
    c=req.body.user
    d=req.body.topicsrel
    e=req.body.urlimg
    data1=new blogmodel({
        title:a,
           creator:c,
           imgurl:e,
           content:b,
           topics:d
   })
   data1.save()
})
app.get("/blog",function(req,res)
{
    blogmodel.find({}).then((data)=>
    {
        res.send(data)
    })
})
app.get("/blog/topic/:topic",function(req,res)
{
    blogmodel.find({topics:req.params.topic}).then((data)=>
    {
        res.send(data)
    })
})
app.get("/blog/person/:email",function(req,res)
{
    blogmodel.find({creator:req.params.email}).then((data)=>
    {
        res.send(data)
    })
})