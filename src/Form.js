import React from "react";

export default function Form({setitem, item,firebaseDataBase,authoentification}) {
    const dataBase = firebaseDataBase();
    const sendData = (title, completed) => {
        dataBase.ref('todos').push().set({
            nameUser: authoentification.displayName,
            email:authoentification.email,
            title: title,
            completed: completed
        });
    }

    const [all,setall] = React.useState("");

    const addtodo = (e) => {
        if(e.key === "Enter" && all !== "" && all !== " ") {
            setitem([
                ...item,
                {id: Date.now(),
                title:all,
                completed:false}
            ])
            // e.target.value = "";
            setall("");
            sendData(all, false)
        }
    }
    return(
            <div className = "form">
            <input 
                type="text" 
                onKeyPress = {addtodo} 
                placeholder="введіть завдання"
                value = {all}
                onChange = {event=>setall(event.target.value)} />
            </div>
    );
}


