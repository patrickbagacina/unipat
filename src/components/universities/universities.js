import React from 'react';
import PageTitle from '../page-title/page-title';
import countries from '../../data/countries.json';
import config from '../../config.json';
import Loading from '../loading/loading';
import UniversityList from './list';
import Filter from '../filter/filter';

export class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      universities: [],
      error: null,
    };

    this.loadUniversities = this.loadUniversities.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.loadUniversities();
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

  handleFilter(filter) {
    this.setState({
      loading: true,
    });
    const url = this.appendUrl(`${config.server.baseUrl}/search`, filter.dropdown, filter.text);
    this.loadUniversities(url);
  }

  render() {
    const { loading, universities } = this.state;
    return (
      <div>
        <PageTitle title="Universities" />
        <Filter  
          dropdown={{label: 'Country', options: countries}}
          text={{label: 'University Name'}} 
          button={{label: 'Filter Universities'}}
          onFilter={this.handleFilter} />
        {
          loading 
            ? <Loading label="Fetching universities" />
            : <UniversityList universities={universities} />
        }
      </div>
    );
  }
}