import React, { Component } from "react";

class ItemDetails extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  state = {};
  render() {
    return (
      <div className="col badge-secondary m-2">
        <div> {this.props.details.desc}</div>
        <div> {this.props.details.value}</div>
        <div> {this.props.details.value}</div>
      </div>
    );
  }
}

export default ItemDetails;
