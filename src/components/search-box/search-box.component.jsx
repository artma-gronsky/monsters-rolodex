import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({handleChange, placeholder})=>(
    <input className="search" onChange={  event => handleChange(event.target.value )} type="search" placeholder={placeholder}/>
)