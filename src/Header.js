import React from "react";

export default function Header({authoentification, logIn, logOut}) {
    if (authoentification) {
        return (
            <div className="header">
                <h1>Список завдань</h1>
                <div className="button">
                    <img src= {authoentification.photoURL} alt={authoentification.displayName}/>
                    <div className="info">
                    <p>{authoentification.displayName}</p>
                    <p>{authoentification.email}</p>
                    <p onClick={() => {logOut()}}>Exit</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="header">
                <h1>Список завдань</h1>
                <div className="button" onClick={() => {logIn()}}>Enter</div>
            </div>
        );
    }    
}