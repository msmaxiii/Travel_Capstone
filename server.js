const  express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(seeddata());
// // console.log('app created')

const {
    getCountries,
    getDestination,
    postItem,
    deleteItem
} = require("./controller");

app.get('/api/seedData')
// app.post
// app.delete




const PORT = 8080;
app.listen(PORT,()=>
    console.log(`I'm here listening on ${PORT}`)
);