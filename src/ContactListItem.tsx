import React from "react";

export default function ContactListItem({children, linkUrl}) {
    return (
        <div className="ContactListItem">
            <a href={linkUrl} target="blank">{children}</a>
        </div>
    );
}