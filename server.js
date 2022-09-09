const  express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// // console.log('app created')
const {
    getCountry,
    getmostPopular,
    getItems,
    postItems,
    deleteItem
} = require("./controller");

app.get('/api/country', getCountry);
app.get('/api/getmostPopular',getmostPopular);
app.get('/api/items',getItems);
app.post('/api/items',postItems);
app.delete('/api/item/item',deleteItem)



const PORT = 8080;
app.listen(PORT,()=>
    console.log(`I'm here listening on ${PORT}`)
);