import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home screen</h1>
        {this.props.children}
      </div>
    );
  }
}