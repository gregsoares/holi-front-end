
import React from 'react'

// @props:
// class, id, 
export const Container = props => {
    return (
        <div className={"w-full m-0 p-0 " + props.class} id={props.id} >
            {props.children}
        </div>
    )
}
