import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [dropdown , setDropdown] = useState(false);
    const ref = useRef();
    console.log(ref);

    useEffect(() =>{
        document.title = `Current state value: ${dropdown}`;
    }, [dropdown]);
  return (
    <nav>
      <ul>
            <li>Home</li>
            <li>About</li>
            <li>
                <button onClick={()=> setDropdown(!dropdown)}>Services <span>&#8595;</span></button>
                {dropdown && (
                    <ul>
                    <li>Design</li>
                    <li>Developoment</li>
                </ul>
                )}
                
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
