import express from 'express'




const PORT=5623
const app=express()

app.listen(PORT,(err)=>{
    if(err)
        console.log(`error connecting to the port:${err}`)
    else
        console.log(`successfully connected on port:${PORT}`)
})