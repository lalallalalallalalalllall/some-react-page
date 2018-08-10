import React, { Component } from 'react';
import ListingItem from './ListingItem';
class Listing extends Component {

  render() {
    // let items;
    if(this.props.items){
      var items = this.props.items.map(item =>{
        return (
            <ListingItem key={item.itemId} item = {item} />
        )
      })
    }
    return (
      <div className="listing">
        {items}
      </div>
    );
  }
}

export default Listing;
