import React, { Component } from 'react';
class OrganizationBar extends Component {

  render() {
      if(this.props.organizationInfo){
        var organizationInfo = this.props.organizationInfo
      }
    return (
      <div className="organizationInfo">
        organizationInfo will be written here
      </div>
    );
  }
}

export default OrganizationBar;
