import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.user.name,
      email: props.user.email,
    };
  }
  saveUser = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
    };
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    }).then(() => this.props.fetchUser());
  };

  updateUser = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
    };
    fetch(`http://localhost:3001/user/${this.props.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    }).then(() => this.props.fetchUser());
  };

  render() {
    return (
      <div>
        <div className="pa2">
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>
        <button onClick={this.props.user.id ? this.updateUser : this.saveUser}>
          save
        </button>
      </div>
    );
  }
}

export default AddUser;
