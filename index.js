const fs = require("fs")
const path = require("path")
let dirpath = path.join(__dirname,"files")
const express = require("express")
let app = express()

app.get("/create",async (req,res)=>{
    await setInterval(() => {
        let dates = new Date()
        let res = dates.toLocaleString() 
        let date = dates.getDate().toString()
        let min = dates.getMinutes().toString()
        let sec = dates.getSeconds().toString()
        fs.writeFileSync(dirpath+`/${date+" "+min+" "+sec}.txt`,`${res}`,(err)=>{
            if(!err){console.log("running")}
        })
    }, 1500);    
    
    res.send("file created")
})


app.get("/files",async (req,res)=>{
    fs.readdir(dirpath,(err,files)=>{
            res.send(files)
    })
})
app.listen(4000)

