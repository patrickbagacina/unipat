import React from 'react';
import PageTitle from '../page-title/page-title';
import Loading from '../loading/loading';
export class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    const cu = localStorage.getItem('currentUser');

    if (cu === null) {
      this.setState({
        loading: false,
      });
      return;
    }
    const currentUser = JSON.parse(cu);
    const u = localStorage.getItem('users');
    let users = [];
    if (u) users = JSON.parse(u);
    const user = users.find((u) => u.username === currentUser.username);
    if (user === null) {
      this.setState({
        loading: false,
      });
      return;
    }

    this.setState({
      loading: false,
      user: user
    });
  }

  render() {
    const { loading, user } = this.state;
    let content;
    if (loading) content = <Loading label="Fetching universities..." />;
    else if (user === null) content = <h1>Please login</h1>;
    else if (user.favorites === null || user.favorites.length === 0) content = <h1>No Favorites Added Yet.</h1>;
    else content = <h1>Heres your favorites</h1>;

    return (
      <div>
        <PageTitle title="Favorites" />
        { content }
      </div>
    );
  }
}