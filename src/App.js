import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react';
// import { Search } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [ ],
      searchField : ''
    }
  }


  // call service
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .then(users => console.log(users))
  }

  render () { 
    //We will use destructuring to get properties from the state
    //This will assign the monters and searchField valus from the state and create constants monsters and searchField
    //This is equivalent to 
    //const monsters = this.state.monsters;
    //and
    //const searchField = this.state.seachField;
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        {/* <Search searchField={this.state.searchField}></Search> */}
        <div>
          <input type="search" 
          placeholder='search monsters' 
          id="searchItem" 
          name="searchItem" 
          // Call back function after searchField state is set to display state, as setState is asynchronouse and will eventually happen we have to use the 
          // second paramater of the function setState to display actual value, we will later use this to filtr the list
          //this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))}}
          //The OnChange event is not HTML , its JMX code
          //React uses Synthetic events, the HTML equivelant is onchange, no camel case
          onChange={e => {
            this.setState({searchField: e.target.value})}}/>
        </div>
         <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
    }
}

export default App;
