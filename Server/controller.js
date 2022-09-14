
const data = require ('./data.json')


module.exports = {

    getDestination:(req,res) =>{
        const { continent } = req.query
        for(let i = 0; i <data.length; i++){
            if (continent === data[i].continent){
                res.status(200).send( data[i].most_popular);
                break
            }
        }
    },
    getMostPopularForm:(req,res) => {
        res.status(200).send(data);
    },
    createDestination:(req,res) =>{
        const { newItem } = req.body;
        items.push(newItem);
        res.status(200).send(postItems);
    },
    deleteDestination: (req, res) => {
        const { item } = req.params;
        const index = items.findIndex(e => e === item);

        if (index === -1) {
            res.status(400).send(`Error: "${item}" Not Found.`);
        } else {
            items.splice(index, 1);

            res.status(200).send(items);

                }
    },
    data:(req,res) =>{
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
    