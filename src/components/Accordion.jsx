import React, { useState } from 'react'

const Accordion = ({title, content}) => {
    const [isActive , setIsActive]=useState(false);
  return (
    
        <section className='accordion-card' key={Math.random()}> 
            <div className="accordion-header" onClick={()=>setIsActive(!isActive)}>
                <div>{title}</div>
                <p className="accordion-icon">{isActive?'-':'+'}</p>
            </div>
            <div className="accordion-content">
                {isActive&& <p className='accordion-card-info'>{content}</p>}
            </div>
        </section>
  )
}

export default Accordion