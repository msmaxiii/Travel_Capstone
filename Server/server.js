const  express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();


app.use(cors());
app.use(express.json());

console.log('app created')

const{ getDestination,
    createDestination,
    deleteDestination 
} = require("./controller");


app.get('/api/getDestination',getDestination);
app.post('/api/items',createDestination);
app.delete('/api/item/item',deleteDestination);




const PORT = 8080;
app.listen(PORT,()=>
    console.log(`I'm here listening on ${PORT}`)
);