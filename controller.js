const items =["getItems,postItems,deleteItem "]




module.exports = {
    getCountry:(req,res) =>{
        res.status(200).send(country);
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
        res.status(200).send(items);
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
    }
};
    