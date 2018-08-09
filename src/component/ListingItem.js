import React, { Component } from 'react';
class ListingItem extends Component {


  render() {
    var item = this.props.item
    return (
      <div className="listing--item">
          <div className="card-body">
            <label>item name</label>--{item.username}<br />
            <label>item age</label>--{item.age}<br />
            <label>item color</label>--{item.color}<br />
          </div>
      </div>
        );
      }
    }
    
export default ListingItem;
