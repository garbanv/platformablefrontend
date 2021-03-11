import React from 'react'
// import {RiLoader4Fill} from 'react-icons/Ri'

export const Loader = ({text}) => {
    return (
        <div className="flex space-between loader text-sm">
            {/* <RiLoader4Fill className="icon-spin mt-0.5 mr-1 "/> */}
            <h3>Loading ...</h3>
            {` ${text}`}
        </div>
    )
}


export default Loader;