import React from "react";
import './ContactListItem.scss'

export default function ContactListItem({children, linkUrl}) {
    return (
        <div className="ContactListItem">
            <a href={linkUrl} target="blank">{children}</a>
        </div>
    );
}