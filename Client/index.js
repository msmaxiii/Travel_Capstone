const continents = document.querySelectorAll(".gallery");


for (let i = 0; i < continents.length; i++){
    continents[i].addEventListener("mouseenter",(evt)=>{
       const continent = evt.target.id
       const desc = document.getElementById(`desc-${continent}`)
       console.log(desc)
       desc.classList.remove("hide")
       desc.classList.add("hover")
       
    })
// }
// for (let y = 0; y < continents.length; y++){
    continents[i].addEventListener("mouseleave",(evt)=>{
       const continent = evt.target.id
      
       const desc = document.getElementById(`desc-${continent}`)
       console.log(desc)
       desc.classList.add("hide")
       desc.classList.remove("hover")
      
       
    })
}
console.log(continents)