const express=require('express');
const pool=require('../database/db.js')
const cors=require('cors')
const cookieParser=require('cookie-parser')

const app=express()
app.use(cookieParser())
app.use(cors({ 
    origin: process.env.FROTEND_URL,
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

const authRoute=require('../routes/auth.route.js')
app.use('/auth',authRoute)


pool.connect().then(()=>console.log("database is connected!!!"))

app.listen(process.env.PORT, ()=>console.log(`Server is running on port ${process.env.PORT}`))