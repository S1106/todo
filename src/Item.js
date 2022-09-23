import React from "react";
import { Context } from "./Context";

export default function Item({id, title, completed}) {

    const {toggleTodo,deleteTodo} = React.useContext(Context);

       const statusTodo = () => {
        
        if (completed) {
            return 'todo__item todo__completed';
        } else {
            return 'todo__item';
        }
    }

    return(
        <li 
            className = {statusTodo()}
                   
        >
            {title}
            <div className="operation">
                <p onClick = {() => {toggleTodo(id)}}  >Complet</p>
                <p onClick = {() => {deleteTodo(id)}}  >Delete</p>
            </div>
        </li>
    );
}