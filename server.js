import express from 'express';




let app = express();
const PORT = 3001;




app.post('/',(req,res)=>{
    console.log(req.query.table);
    res.send(202);
})





app.listen(PORT,"0.0.0.0" ,() => {
    console.log(`Server runnning on port ${PORT}`);
});