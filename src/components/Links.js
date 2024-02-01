import React from "react";

function Links(props){
    return (
        <div>
            <h3>Links</h3>
            <a href={props.mylinks.github}>{props.mylinks.github}</a>
            <a href={props.mylinks.linkedin}>{props.mylinks.linkedin}</a>
        </div>
    )
}

export default Links;