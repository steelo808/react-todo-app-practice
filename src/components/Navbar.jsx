import React from 'react';
import { useState } from 'react';

function Navbar() {
    const [dropdown , setDropdown] = useState(false);
  return (
    <nav>
      <ul>
            <li>Home</li>
            <li>About</li>
            <li>
                <button onClick={()=> setDropdown(!dropdown)}>Services <span>&#8595;</span></button>
                <ul>
                    <li>Design</li>
                    <li>Developoment</li>
                </ul>
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
