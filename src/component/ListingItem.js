import React, { Component } from 'react';
class ListingItem extends Component {

  render() {
    var item = this.props.item
    console.log(item.imageURL[0])
    return (
      <div className="listing--item">
        <div className="card-body">
          {/* <!-- do somethings to show item here-->) */}
          <img className="card-img-top" src={item.imageURL[0]} alt="Food" />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDesc}</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            
          </div>
        </div>
        );
      }
    }
    
export default ListingItem;
