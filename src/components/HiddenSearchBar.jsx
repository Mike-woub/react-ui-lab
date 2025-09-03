import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"

const HiddenSearchBar = () => {
    const [showInput, setShowInput]=useState(false);
    const [bgColor, setBgColor]=useState("white");
    const handleClick=(e)=>{
        setBgColor("#1a1a1a");
        if(e.target.className === 'search-container'){
        setShowInput(false)
        setBgColor("#fff")
    }
    }
  return (
    <section className='search-container' style={{backgroundColor: bgColor}} onClick={handleClick}>
        <h1 style={{textAlign:"center" , color: showInput? "white": "black"}}>Click to Search</h1>
        {
        showInput ? ( <input className='search-input' placeholder='search ....' type="text" /> ):(<FaSearch onClick={()=>setShowInput(true)}/>)
        }
    </section>
  )
}

export default HiddenSearchBar