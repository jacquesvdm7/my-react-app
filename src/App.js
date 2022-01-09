import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [ ]
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
    return (
      <div className="App">
        <Search></Search>
         <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
    }
}

export default App;
