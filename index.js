const express= require('express')

const app =express();

app.use(express.json())
const port =3000;

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Home Page"
    })
})
app.listen(port,()=>{
    console.log(`Srver URL http://localhost:${port}`)
})
