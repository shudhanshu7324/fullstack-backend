import express from "express"
import 'dotenv/config'
// import cors from 'cors';

const app = express();

// const corsOptions ={
//     origin:'http://localhost:5173', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.get('/getJokes',(req,res)=>{
    const Jokes = [
        {
            "id": 1,
            "title": "First Joke",
            "content": "This is the first Joke."
        },
        {
            "id": 2,
            "title": "Second Joke",
            "content": "This is the Second Joke."
        },{
            "id": 3,
            "title": "Third Joke",
            "content": "This is the Third Joke."
        },{
            "id": 4,
            "title": "Fourth Joke",
            "content": "This is the Fourth Joke."
        }
    ];
    res.send(Jokes)
})


app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})