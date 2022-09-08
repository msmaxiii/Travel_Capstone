const NavBar =()=>{
    return(
        <nav style = {container}>
            <NavLink to ='/' style={{color:"#000"}}>Home</NavLink>
            <NavLink to ='/About' style={{color:"#000"}}>About</NavLink>
             <NavLink to ='/' style={{color:"#000"}}>CountriesToGo</NavLink>
           
            
           
        </nav>
    )
}
const container ={
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "black"
 
}