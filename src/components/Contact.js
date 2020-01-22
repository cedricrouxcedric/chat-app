import React from "react";
import "./contact.css";


function Contact(props) {
    return (
        <figure className="Contact">
        <img src={props.avatar} alt={props.name} className="avatar"/>

    <figcaption>

    {props.online}

    <p className="name">{props.name}</p>
        <div className="status">
            <div className={props.online ? 'status-online' : 'status-offline'}></div>
            <p className="status-text">{props.online ? 'online' : 'offline'}</p>
        </div>
    </figcaption>
    </figure>)
    ;
}

export default Contact;
