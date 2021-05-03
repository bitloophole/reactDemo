import React, { Component } from "react";
class Navbar extends Component {
    const 
    state = {
        ensosuite: "Enso Suite",
        home: "home",
        self: "#",
        enso: "Enso Edge"
  };
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href= {this.state.self}>
             {this.state.ensosuite}
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
                <a href={this.state.self}> { this.state.home}</a>
            </li>
            <li>
                <a href={this.state.self}> { this.state.enso}</a>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
