import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./item.css";

class Item extends Component {
    state = {  }
    render() { 
        return (
          <div className="item">
            <img
              src={"/images/product/" + this.props.data.image}
              alt="product"
            ></img>

            <h5>{this.props.data.title}</h5>

            <label className="monetaryValues">
              Price: ${this.props.data.price.toFixed(2)}
            </label>
            <label className="monetaryValues">
              Total: ${this.props.data.price.toFixed(2)}
            </label>

            <div className="item-controls">
              <QuantityPicker></QuantityPicker>

              <button className="btn btn-sm btn-info btn-add">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        );
    }
}
 
export default Item;