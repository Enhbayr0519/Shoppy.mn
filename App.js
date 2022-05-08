import React, {Component} from "react";
import { CardList } from "./Components/Card-list";
import {Search} from "./Components/Search-box";
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  onSearchChanged = event => {
    this.setState( { searchField: event.target.value} )
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ robots: data }))
  }
  
  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(el => el.name.includes(searchField))

    return (
      <>
        <div className="App">
          <h1>Robot</h1>
          <Search onSearch={this.onSearchChanged}/>
          <CardList robots={filteredRobots} />
        </div>
      </>
    )
  }
}