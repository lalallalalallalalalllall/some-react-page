import React, { Component } from 'react';
import './App.css';
import Listing from './component/Listing.js';
class App extends Component {

  constructor(){
    super()
    this.state = {
      title: "user-listing",
      items : [
        {
          userId: 'food123',
          username: "milketea",
          age : 10 ,
          color : "red" ,
        },
        {
          userId: 'food124',
          username: "milketea1" ,
          age : 12,
          color : "purple",
        }
      ]
    }
  }

  render() {
    var listingTitle = this.state.title;
    return (
      <div className="App">
        <h1>Some project testing</h1>
        <Listing title = {listingTitle} items = {this.state.items}/>
        
      </div>
    );
  }
}

export default App;
