const continents = document.querySelectorAll(".gallery");


for (let i = 0; i < continents.length; i++){
    continents[i].addEventListener("mouseenter",(evt)=>{
       const continent = evt.target.id
       const desc = document.getElementById(`desc-${continent}`)
       desc.classList.remove("hide")
       desc.classList.add("hover")
       console.log(desc)
    })
}
for (let y = 0; y < continents.length; y++){
    continents[y].addEventListener("mouseout",(evt)=>{
       const continent = evt.target.id
       console.log(continent)
    })
}
