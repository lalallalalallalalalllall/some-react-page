import React, { Component } from 'react';
import ListingItem from './ListingItem';
class Listing extends Component {
  
  //listing of all user 
  // constructor(){
  //   super()
  // }



  render() {
    // let items;
    var title = this.props.title
    if(this.props.items){
      var items = this.props.items.map(item =>{
        return (
            <ListingItem key={item.userId} item = {item} />
        )
      })
    }
    return (
      <div className="listing">
        <h3>{title}</h3 >
        {items}
      </div>
    );
  }
}

export default Listing;
