import React from "react";

function Items(){
const styling = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    border:"2px solid white"
};
const blockStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
}
const partTwoStyle = {
    display:"flex",
    flexDirection:"column",
    // justifyContent: "space-evenly",
    
}
const contents = {
    1: {
        image:"./img1.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:"Mount Fuji is the takkest mountain int Jpan, standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    2: {
        image:"./img2.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:"Mount Fuji is the takkest mountain int Jpan, standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    3: {
        image:"./img3.png",
        locationName:"JAPAN",
        specificPlace:"Mount Fuji",
        duration:"12 Jan, 2021 - 24 Jan,2021",
        about:"Mount Fuji is the takkest mountain int Jpan, standing at3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    }
}

    return(
       
       <div className="Block" style={blockStyle}>
       {Object.values(contents).map((data,index) => {
            return(
            <div className="contentContainer" style={styling}>
                <div className="partOne">
                <img src={data.image} alt="" height={"auto"} width={"250px"}/>
                </div>
                <div className="partTwo" style={partTwoStyle}>
                <p><span>{data.locationName}</span><a href="">View on Google Maps</a></p>
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
