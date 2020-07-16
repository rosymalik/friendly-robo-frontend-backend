import React, { Component } from "react";
import AddUser from "./add-user";
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
      showAdd: false,
      updateUser: {},
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  fetchUser = () => {
    fetch("http://localhost:3001/user")
      .then((Response) => {
        return Response.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({ robots: res.users, showAdd: false, updateUser: {} });
      });
  };
  editUser = (user) => {
    this.setState({ showAdd: true, updateUser: user });
  };
  componentDidMount() {
    this.fetchUser();
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
        <button
          onClick={() => {
            this.setState({ showAdd: !this.state.showAdd });
          }}
          style={{
            borderColor: "#19a974",
            backgroundColor: "#cdecff",
            marginBottom: 10,
          }}
        >
          {this.state.showAdd ? "close" : "Add User"}
        </button>
        {this.state.showAdd ? (
          <AddUser user={this.state.updateUser} fetchUser={this.fetchUser} />
        ) : null}
        <Scroll>
          <CardList
            filteredRobots={filteredRobots}
            editUser={this.editUser}
            fetchUser={this.fetchUser}
          />
        </Scroll>
      </div>
    );
  }
}
export default App;
