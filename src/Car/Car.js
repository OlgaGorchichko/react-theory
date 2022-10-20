import React from "react";

// function car() {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () =>  (
//     <div>This is car 
//         <strong> component</strong>
//     </div>
// )

export default (props) =>  (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
        { props.children }
    </div>
)