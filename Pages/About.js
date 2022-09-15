
const firstNameInput = document.getElementById("fname")
const lastNameInput = document.getElementById("lname")
const continentSelect = document.getElementById("continent")
const emailAddressInput = document.getElementById("email")
const form = document.querySelector('#email');
const getMostPopularForm = document.querySelector("#mostPopularForm")
const destinationResults = document.getElementById ("destinationResults")


 const getDestination = (evt) => {
    evt.preventDefault()
    const fname = firstNameInput.value
    const lname = lastNameInput.value
    const continent = continentSelect.value

    axios.get(`http://localhost:8080/api/getDestination?continent=${continent}`)
    .then (res =>{
        const data = res.data;
       destinationResults.innerHTML = ""
        for(let i = 0; i <data.length;i++){
         const li = document.createElement("li")
         li.textContent = data[i]
         destinationResults.appendChild(li)
        }
        console.log(data)
    })
    .catch(err => {
        console.log(err);

   
    })
 }

function handleSend(evt) {
	evt.preventDefault();
	
	alert('Email sent');
    
}
form.addEventListener('submit', handleSend);
getMostPopularForm.addEventListener('submit',getDestination)
