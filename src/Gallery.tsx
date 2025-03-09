import React from "react";
import { useState } from "react";
import "./Gallery.scss";

export default function Gallery({children, pointsCount, columnsCount, columnWidth, rowsCount, rowHeight}) {
    let [ point, setPoint ] = useState(0);
    // const pointsCount = Math.floor( children.length / 2 ) - 1;
    const pointsList = new Array<React.JSX.Element>();
    for (let index = 0; index < pointsCount; index++) {
        pointsList.push(<div key={index} onClick={() => { setPoint(index); }} className={`Point ${ index == point ? 'Active' : 'Inactive' }`}></div>);
    }
    let pointPercentage = -point * 100;
    // let columnsCount = pointsCount + 1;

    return (
        <div className="Gallery Gallery1">
            <div className="Hider">
                <div className="Scroller"
                    style={{
                        gridTemplateColumns: `repeat(${columnsCount}, ${columnWidth}%)`,
                        gridTemplateRows: `repeat(${rowsCount}, ${rowHeight}%)`,
                        left: `${pointPercentage}%`
                    }}>
                    {children}
                </div>
            </div>
            { !!pointsCount &&
                <div className="Points">
                    {pointsList}
                </div>
            }
        </div>
    );
}