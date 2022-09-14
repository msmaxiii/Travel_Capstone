
const firstNameInput = document.getElementById("fname")
const lastNameInput = document.getElementById("lname")
const emailAddressInput = document.getElementById("email")
const continentSelect = document.getElementById("continent")
const getMostPopularForm = document.querySelector("#mostPopularForm")
const destinationResults = document.getElementById ("destinationResults")


 const getDestination = (evt) => {
    evt.preventDefault()
    const fname = firstNameInput.value
    const lname = lastNameInput.value
    const email = emailAddressInput.value
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
 


getMostPopularForm.addEventListener('submit',getDestination)
 