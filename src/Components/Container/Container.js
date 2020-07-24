
import React from 'react'

// @props:
// 
export const Container = props => {
    return (
        <div className={"w-full m-0 p-0  " + props.class}>
            {props.children}
        </div>
    )
}
