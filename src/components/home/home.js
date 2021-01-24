import React from 'react';
import NavBar from '../navbar/navbar';
import './home.css';
import PropTypes from 'prop-types';

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

Home.propTypes = {
  children: PropTypes.array.isRequired,
};