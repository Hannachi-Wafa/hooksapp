import React, { useRef } from 'react'

const Filter = ({handleChangeterm ,searchTerm} ) => {

const inputEL=useRef("");
const getsearchterm=()=>{
    handleChangeterm(inputEL.current.value)
}
    return (
        <div className="search">
        <input 
        ref={inputEL}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={getsearchterm}
        className="search1"
/>
    
        </div>
    )
}
export default Filter