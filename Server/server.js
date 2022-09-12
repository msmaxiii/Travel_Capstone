const  express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(cors());
app.use(express.json());

console.log('app created')
const {
    getCountry,
    getmostPopular,
    getItems,
    postItems,
    deleteItem,
    seedData
} = require("./controller");

app.get('/api/getcountry', getCountry);
app.get('/api/getmostPopular',getmostPopular);
app.get('/api/items',getItems);
app.post('/api/items',postItems);
app.delete('/api/item/item',deleteItem);
app.post('seedData', seedData);



const PORT = 8080;
app.listen(PORT,()=>
    console.log(`I'm here listening on ${PORT}`)
);