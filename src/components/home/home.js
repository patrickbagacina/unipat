import React from 'react';
import NavBar from '../navbar/navbar';
import './home.css';
import PropTypes from 'prop-types';
import { Universities } from '../universities/universities';
import { Newsletters } from '../newsletters/newsletters';
import { Favorites } from '../favorites/favorites';

export class Home extends React.Component {
  render() {
    const { match, history } = this.props;
    let body;
    if (match.path === '/' || match.path === '/universities') body = <Universities />;
    if (match.path === '/favorites') body = <Favorites />;
    if (match.path === '/newsletters') body = <Newsletters />;

    return (
      <div>
        <NavBar history={history} />
        <div className="content">
          {body}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};