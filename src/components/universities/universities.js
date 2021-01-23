import React from 'react';
import PageTitle from '../page-title/page-title';
import SearchableDropdown from '../searchable-dropdown/searchable-dropdown';
import counrties from '../../data/countries.json';
import config from '../../config.json';
import Loading from '../loading/loading';
import UniversityList from './list';

export class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      universities: [],
      country: null,
      name: null,
      error: null,
    };
  }

  componentDidMount() {
    this.loadUniversities();
  }

  getUrl() {
    const { country, name } = this.state;
    let url = `${config.server.baseUrl}/search`;

    if (country || name) url.concat('?');
    if (country) url.concat(`country=${country}`);
    if (country && name) url.concat('&');
    if (name) url.concat(`name=${name}`);

    return url;
  }

  loadUniversities() {
    fetch(this.getUrl())
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

  handleChange(event) {
    this.setState({loading: true});
    console.log(event.target.innerText);
  }

  render() {
    const { loading, universities } = this.state;
    return (
      <div>
        <PageTitle title="Universities" />
        <SearchableDropdown label="Country" options={counrties} onChange={this.handleChange}/>
        {
          loading 
            ? <Loading label="Fetching universities" />
            : <UniversityList universities={universities} />
        }
      </div>
    );
  }
}