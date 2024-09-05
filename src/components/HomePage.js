import React from "react"
import logo from "../assets/bread.png"
import side from "../assets/side.png"
import NavBar from "./Navbar"

const HomePage = () => {
  return (
    <div><NavBar/>
    <div style={{display:"flex",justifyContent:"center" ,width:"100%",padding:"10px"}}>
    <div style={{    display: "flex",
    justifyContent: "center",
    alignItems: "center ",background:`url(${side}) no-repeat`,backgroundPosition:"bottom",}}
    
    >
The Best Chicken Ever!
    </div>
    <div style={{width:"100%",background:`url(${logo})`,height:"90vh",width:"100%"}}></div>
    </div>
    </div>
  )
}

export default HomePage