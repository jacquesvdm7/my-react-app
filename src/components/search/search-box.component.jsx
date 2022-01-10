import React from 'react';
import "./search-box.styles.css"

export const SearchBox = props => (
    <div>
          <input type="search" 
            className='search'
            placeholder={props.placeholder} 
            id="searchItem" 
            name="searchItem" 
            // Call back function after searchField state is set to display state, as setState is asynchronouse and will eventually happen we have to use the 
            // second paramater of the function setState to display actual value, we will later use this to filtr the list
            //this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))}}
            //The OnChange event is not HTML , its JMX code
            //React uses Synthetic events, the HTML equivelant is onchange, no camel case
            //e => {this.setState({searchField: e.target.value})}
            onChange={props.handleChange}/>
    </div>
)