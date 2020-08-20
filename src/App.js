import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/Card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // 読めるデータに
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
