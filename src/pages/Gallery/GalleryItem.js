import React from 'react'
import { points } from './Gallery-data';

export default function GalleryItem({index, columnOffset}) {
//src, 
    const values = points[index];
    if (!values) return null;
    //DESTRUCTURING grid area shorthand property:
    const [row, column, spanRow, spanColumn] = values;

    return (
        <div className="gallery-item"
            style={{
                gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`
            }}
        >
            <div className="gallery-item-image">
                <div className="gallery-item-imgInner"
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/image-5.webp'})`
                }}>
                </div>
            </div>
        </div>
    )
}
