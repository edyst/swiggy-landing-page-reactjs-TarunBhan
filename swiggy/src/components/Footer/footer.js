import React from 'react'
import './footer.css'
import FSEC1 from './Fsec1/fsec1'
import FSEC2 from './Fsec2/fsec2'
import FSEC3 from './Fsec3/fsec3'

const footer = () => {
    return (
        <div className="footer">
            <FSEC1 />
            <FSEC2 />
            <FSEC3 />
        </div>
    )
}
export default footer 