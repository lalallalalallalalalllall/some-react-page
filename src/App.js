import React, { Component } from 'react';
import './App.css';
import Listing from './component/Listing.js';
import Header from './component/Header.js';
class App extends Component {
  constructor(){
    super()
    
    var items = [
      {
        "organizationId" : "a0aff0e6-84b1-4ddb-aad3-a8433e969261",
        "itemId" : "5ae4659d-bc9e-41dc-be00-0ae97f8c008f",
        "itemName" : "Happy pizzzza",
        "itemDesc" : "The most happy pizzzza in the world !",
        "itemChoice" : [ 
            {
                "type" : "spicy chicken",
                "price" : 12
            }, 
            {
                "type" : "spicy tuna",
                "price" : 12
            }, 
            {
                "type" : "spicy vege",
                "price" : 12
            }
        ],
        "imageURL" : [ 
            "https://s3-ap-southeast-1.amazonaws.com/elasticbeanstalk-ap-southeast-1-072643087753/FOOD/food3.jpg"
        ],
        "addOnChoice" : []
    },
    {
        "organizationId" : "a0aff0e6-84b1-4ddb-aad3-a8433e969261",
        "itemId" : "0befa622-95df-41a9-ae7a-10190c5de021",
        "itemName" : "Happy salad",
        "itemDesc" : "The most happy salad in the world !",
        "itemChoice" : [ 
            {
                "type" : "Vege Mix",
                "price" : 10
            }, 
            {
                "type" : "Happy mix",
                "price" : 18
            }
        ],
        "imageURL" : [ 
            "https://s3-ap-southeast-1.amazonaws.com/elasticbeanstalk-ap-southeast-1-072643087753/FOOD/food4.jpg", 
            "https://s3-ap-southeast-1.amazonaws.com/elasticbeanstalk-ap-southeast-1-072643087753/FOOD/food6.jpg"
        ],
        "addOnChoice" : []
    }
    ]
    this.state = { items : items}
     
    }
  
  render() {
    // var organizationInfo = this.state.organizationInfo;
    // console.log(organizationInfo);
    return (
      <div className="App">
        <Header/>
        <Listing items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
