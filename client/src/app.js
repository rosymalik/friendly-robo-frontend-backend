import React, { Component } from "react";
import "./app.css";
import CardList from "./cradlist";
import Scroll from "./scroll";
import Searchbox from "./searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then((Response) => {
        return Response.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({ robots: res.users });
      });
  }

  render() {
    const filteredRobots = this.state.robots.filter((rb) => {
      return rb.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Friendly BOTS</h1>
        <Searchbox searchange={this.onSearchChange} />
        <Scroll>
          <CardList filteredRobots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
