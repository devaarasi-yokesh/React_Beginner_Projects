import { useState } from "react";
import bird from './assets/bird_2.jpg'
import Items from "./Items";
function Header(){
return(
    <>
   <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{display:"flex", alignItems:"center"}}>
        <div style={{width:"50px", height:"50px", backgroundColor:"wheat", borderRadius:"50%"}}></div>
        <h1>TravelHoun</h1>
    </div>
    </div>
     < Items/>
     </>
)
}
export default Header;
