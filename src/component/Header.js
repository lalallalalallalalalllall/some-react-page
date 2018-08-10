import React, { Component } from 'react';
class Header extends Component {

    

  render() {

    // var organizationInfo = {
    //     "organizationId" : "a0aff0e6-84b1-4ddb-aad3-a8433e969261",
    //     "organizationName" : "Happy House",
    //     "organizationDesc" : "Very happy and sweet house for your dinner and lunch",
    //     "organizationType" : "restaurant",
    //     "address" : {
    //         "addressLine1" : "Happy House 1235 @ someplace @ mustmustmust",
    //         "addressLine2" : "not a must",
    //         "addressLine3" : "not a must",
    //         "city" : "some palace",
    //         "state" : "some state",
    //         "postalCode" : "00000",
    //         "country" : "MY"
    //     },
    //     "currencyUse" : "MYR",
    //     "phoneNo" : "+60133456789",
    //     "email" : "happy-feed@123.com",
    //     "ownerId" : "some-guid"
    // };




    return (
      <div className="listing">
        <div class="header-bar">
            <h1>This is some title</h1>
            <ul><li>This might be some useful feature !</li></ul>
        </div>
      </div>
    );
  }
}

export default Header;
