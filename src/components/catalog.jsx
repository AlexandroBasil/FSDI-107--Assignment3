import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";

import "./catalog.css";


class Catalog extends Component {
  state = {
    catalog: []
  };

  render() {
    return (
      <div className="catalog">
        <div className="titleHeading">
          <h3>Welcome to Leathers Finest Handmade Shop</h3>
          <h5>We have {this.state.catalog.length} products available for you today!</h5>
        </div>

        {this.state.catalog.map((obj) => (
          <Item key={obj._id} data={obj}></Item>
        ))}
      </div>
    );
  }
    // best place to load data from server
    // executed after the initial render
  componentDidMount() {
    let service = new ItemService();
    let data = service.getCatalog();
    console.log(data);
    this.setState({ catalog: data })
  }
}

export default Catalog;
