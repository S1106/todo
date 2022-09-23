import React from "react";
import Item from "./Item";

export default function Form({item}) {
   

    return(
        <div className="todo_list">
          <ul className = "todo__items">
            {item.map(element=> <Item key={element.id} {...element}/>)}
          </ul>
        </div>
    );
}

