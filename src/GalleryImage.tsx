import React from "react";
import { useState } from "react";
import "./GalleryImage.scss";

export default function GalleryImage({imageId, displayText}) {
    let [ fullscreen, setFullscreen ] = useState(false);


    return (
        <div className={'GalleryImage id-' + imageId} onClick={() => { setFullscreen(!fullscreen) }}>
            <div className={'Image Min id-' + imageId}></div>
            <div className="Text">{displayText}</div>
            <div className={ `FullscreenView ${fullscreen ? 'visible' : 'hidden'}` }>
                <div className="Backdrop"></div>
                <div className="ContentWrapper">
                    <div className={'Image Max id-' + imageId}></div>
                    <div className="HeaderText">{displayText}</div>
                </div>
            </div>
        </div>
    );
}