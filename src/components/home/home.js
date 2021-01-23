import React from 'react';
import NavBar from '../navbar/navbar';
import './home.css';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}