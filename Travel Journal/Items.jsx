import React from "react";

function Items(){
const styling = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    margin:"20px"
};
const blockStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    color:"black", 
    margin:"10px"
}
const partOneStyle = {
    width:"150px",
    height:"198px",
    overflow:"hidden",
    borderRadius:"5px",
    flexShrink:"0",
    
}
const imgStyle = {
    height:"100%",
    width:"100%",
    objectFit:"cover"
}
const partTwoStyle = {
    display:"flex",
    flexDirection:"column", // Vertically I can justify this children using justifyContent
    justifyContent: "center",
    marginLeft:"10px"
}
const contents = {
    1: {
        image:"./img1.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:`Mount Fuji is the takkest mountain int Japan, 
        standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, 
        for both Japanese and foreign tourists.`
    },
    2: {
        image:"./img2.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:"Mount Fuji is the takkest mountain int Japan, standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    3: {
        image:"./img3.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:"Mount Fuji is the takkest mountain int Japan, standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    }
}

    return(
       
       <div className="Block" style={blockStyle}>
       {Object.values(contents).map((data,index) => {
            return(
            <div className="contentContainer" style={styling}>
                <div className="partOne" style={partOneStyle}>
                <img src={data.image} alt="main-img" style={imgStyle}/>
                </div>
                <div className="partTwo" >
                <p><span>{data.locationName}</span>&nbsp;&nbsp;&nbsp;<a href="" style={{textDecoration:"none",color:"grey"}}>View on Google Maps</a></p>
                <h2>{data.specificPlace}</h2>
                <p>{data.duration}</p>
                <p>{data.about}</p>
                </div>
            </div>
            )
    })}
   </div>
     
    )
}

export default Items;
