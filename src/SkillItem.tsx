import React from "react";
import "./SkillItem.scss";

export default function SkillItem({imageId}) {
    return (
        <div className={'SkillItem id-' + imageId}></div>
    );
}