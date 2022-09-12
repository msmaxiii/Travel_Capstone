
const submitBtn = document.querySelector("#submitButton");
const newItemForm = document.querySelector("#newItemForm");
const deleteItemBtn = document.querySelector("#deleteItem");
const getCountry = document.querySelector("getCountry");
const getmostPopular = document.querySelector("getmostPopular");
const baseURL = "http://localhost:8080/api/items";


const getCountry = () => {
    axios.get("http://localhost:8080/api/getcountry/")
        .then(res => {
            const data = res.data;
            alert(data);
             }),
            
 };

const getmostPopular = () => {
    axios.get("http://localhost:8080/api/getmostPopular/")
        .then(res => {
                const data = res.data;
                alert(data);
        });
 };     

const postItem = (evt) => {
    evt.preventDefault();

    const body = { newItem: newItemNpt.value };

    axios.post(baseURL, body)
        .then(res => {
            updateItemsUl(res.data);

            alert(`${body.newItem} added!`);
        })
        .catch(err => {
            console.log(err);
        });
};

const deleteItem = () => {
    const itemToDelete = prompt("what country do you want to delete.");

    axios.delete(`${baseURL}/${itemToDelete}`)
        .then(res => {
            updateItemsUl(res.data);

            alert(`"${itemToDelete}" deleted!`);
        })
        .catch(err => {
            alert(err.response.data);
        })
};
submitBtn.addEventListener('click', getCountry);    
newItemForm.addEventListener("submit", postItem);
deleteItemBtn.addEventListener("click", deleteItem);
        