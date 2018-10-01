import React from "react"
import './App.css'
function ListItem (props){
    return (
        <h2 key={props.index}>{props.food}</h2>
    )
}

export default ListItem;