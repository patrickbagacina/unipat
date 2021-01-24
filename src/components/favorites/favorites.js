import React from 'react';
import PageTitle from '../page-title/page-title';
import Loading from '../loading/loading';
import FavoriteList from './list';
import Empty from '../empty/empty';
export class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    };

    this.handleFavorite = this.handleFavorite.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    const user = this.getUser();

    if (user === null) {
      this.setState({
        loading: false,
      });
      return;
    }

    if (!user.favorites) user.favorites = []; 

    this.setState({
      loading: false,
      user: user
    });
  }

  getUser() {
    const u = localStorage.getItem('currentUser');

    if (!u) return null;

    return JSON.parse(u);
  }

  handleFavorite(university) {
    const user = this.getUser();
    if (!user) return;
    if (user.favorites === null || user.favorites === undefined) user.favorites = [];

    const i = user.favorites.findIndex((f) => f.country === university.country && f.name === university.name);
    if (i > -1) user.favorites.splice(i, 1);

    this.setState({
      user: user
    });

    // update current user in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // update user in users
    const u = localStorage.getItem('users');
    const users = JSON.parse(u);
    const ind = users.findIndex((us) => us.username === user.username);
    if (ind === -1) return;
    users[ind] = user;
    localStorage.setItem('users', JSON.stringify(users));
  }

  render() {
    const { loading, user } = this.state;
    let content;
    if (loading) content = <Loading label="Fetching favorites..." />;
    else if (user === null) content = <Empty message="Please login to view or add favorites." />;
    else if (user.favorites === null) content = <Empty message="No Favorites Added Yet." />;
    else content = <FavoriteList 
      universities={user.favorites} 
      enableFavorite={true}
      onFavorite={this.handleFavorite}
    />;

    return (
      <div>
        <PageTitle data-testid="pt-favorites" title="Favorites" />
        { content }
      </div>
    );
  }
}