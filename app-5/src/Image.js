import React from "react"


export default function Image(props) {
    return (
        <img alt={props.altKey} src={props.source} />
    )
}