import React from 'react';
function Records(props){
    console.log(props.info)
    return(
        <span className="Records">
        <div className="Record">Fastest <br></br>{props.info[0]}</div>
        <div className="Record">Furthest</div>
        </span>
    )
}
export default Records;