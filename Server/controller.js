const items =["getItems,postItems,deleteItem,seedData ,getCountry,getmostPopular"];
const seedData = require ('./seedData.json')


module.exports = {
    getCountry:(req,res) =>{
        res.status(200).send(seedData);
    },
    getmostPopular:(req,res) => {
        res.status(200).send(mostPopular);
    },
    getItems:(req,res) =>{
        res.status(200).send(getItems);
    },
    postItems:(req,res) =>{
        const { newItem } = req.body;
        items.push(newItem);
        res.status(200).send(postItems);
    },
    deleteItem: (req, res) => {
        const { item } = req.params;
        const index = items.findIndex(e => e === item);

        if (index === -1) {
            res.status(400).send(`Error: "${item}" Not Found.`);
        } else {
            items.splice(index, 1);

            res.status(200).send(items);

                }
    },
    seedData:(req,res) =>{
        return(
            then(()=> {
                console.log("data")
                res.sendStatus(200)
            .catch(err => console.log("error",err))
            }
            )
        )
    }

};
    