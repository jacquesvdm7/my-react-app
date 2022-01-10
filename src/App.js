import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/search/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [ ],
      searchField : ''
    }

    //Here we bind "this" current context to our own methods
    //This means we have to do this for every class method which is counter productive
    //I better way is to use arrow function on the method
    this.handleChange = this.handleChange.bind(this);
  }


  // call service
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .then(users => console.log(users))
  }

  //This is our own function to set state
  //Java script does not explicitly set "this" context on methods
  //We have to bind thius method to "this" in constructor
  // handleChange(e) {
  //   this.setState({searchField: e.target.value})
  // }

  //Instead of using the above method which requires us to set the "this" context in constructor we can use the arrow function
  //which will then set "this" in context where it was created
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
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
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox> 
        
         <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
    }
}

export default App;
