import React from 'react';

export const Search = props => (
    <div>
        <input type="search" placeholder='search monsters' id="searchItem" name="searchItem" onChange={e => console.log(e.target.value)}/>
    </div>
)