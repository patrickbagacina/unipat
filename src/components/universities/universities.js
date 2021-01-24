import React from 'react';
import PageTitle from '../page-title/page-title';
import countries from '../../data/countries.json';
import config from '../../config.json';
import Loading from '../loading/loading';
import UniversityList from './list';
import Filter from '../filter/filter';
import Empty from '../empty/empty';

export class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
      loading: false,
      universities: [],
      error: null,
      user: null
    };

    this.loadUniversities = this.loadUniversities.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
  }

  componentDidMount() {
    const user = this.getUser();

    if (user) {
      this.setState({user: user});
    }
  }

  appendUrl(url, country, name) {
    if (country != null || name != null) url = url.concat('?');
    if (country != null) url = url.concat(`country=${country}`);
    if (country != null && name != null) url = url.concat('&');
    if (name != null) url = url.concat(`name=${name}`);

    return url;
  }

  loadUniversities(url = `${config.server.baseUrl}/search`) {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            universities: result,
          });
        },
        (error) => {
          this.setState({
            loading: false,
            error: error,
          });
        }
      );
  }

  getUser() {
    const u = localStorage.getItem('currentUser');

    if (!u) return null;

    return JSON.parse(u);
  }

  handleFilter(filter) {
    this.setState({
      loading: true,
      initial: false
    });
    const url = this.appendUrl(`${config.server.baseUrl}/search`, filter.dropdown, filter.text);
    this.loadUniversities(url);
  }

  handleFavorite(university) {
    const user = this.getUser();
    if (!user) return;
    if (!user.favorites) user.favorites = [];

    if (!this.isFavorite(university)) user.favorites.push(university);
    else {
      const ind = user.favorites.findIndex((f) => f.country === university.country && f.name === university.name);
      if (ind > -1) user.favorites.splice(ind, 1);
    }

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

  isFavorite(university) {
    const user = this.getUser();
    if (!user || !user.favorites) return false;
    
    return user.favorites.find((f) => f.name === university.name && f.country === university.country) && true;
  }

  render() {
    const { initial, loading, universities, user } = this.state;
    return (
      <div>
        <PageTitle title="Universities" />
        <Filter  
          dropdown={{label: 'Country', options: countries}}
          text={{label: 'University Name'}} 
          button={{label: 'Filter Universities'}}
          onFilter={this.handleFilter} />
        {
          initial ? <Empty message="Please apply filters to list some universities." /> :
          loading 
            ? <Loading label="Fetching universities..." />
            : <UniversityList 
                universities={universities} 
                enableFavorite={user !== null}
                onFavorite={this.handleFavorite}
                isFavorite={this.isFavorite}
              />
        }
      </div>
    );
  }
}