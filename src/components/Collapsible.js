import React, { useState } from 'react';

function Collapsible(props) {
    const[isOpen, setIsOpen]=useState(false);

    return(
        <div className='collapsible'>
            <div className='toggle' onClick={()=>setIsOpen(!isOpen)}>{props.label}</div>
            {isOpen && <div className='content'>{props.value || props.children}</div>}
            
        </div>
    )
}

export default Collapsible;