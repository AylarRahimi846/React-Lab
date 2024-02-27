import { useState } from "react";
import "./User.css"

function User(props){
    const { picture, age, email, location, dob, phone, title, first, last, gender} = props;
    


    return(
        <section className="container">
        <div className="cardContainer">
        <img className="cardImg" src={picture} alt="" />
        <h1 className="cardName">name:{title}{first}{last}</h1>
        <p className="cardEmail">email:{email}</p>
        <p>
            <span className="cardGender">Gender:{gender}</span>
            <span className="cardAge">Age:{age}</span>
        </p>
        </div>
        </section>
        
    )
}


export default User