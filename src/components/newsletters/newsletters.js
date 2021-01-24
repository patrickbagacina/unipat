import React from 'react';
import data from '../../data/users.json';
import PageTitle from '../page-title/page-title';
import Loading from '../loading/loading';
import NewsletterList from './list';
import Empty from '../empty/empty';
import ViewLetter from './view';

export class Newsletters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      letters: null,
      view: null
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    let letters = data.newsletters ? data.newsletters : [];  

    this.setState({
      loading: false,
      letters: letters,
    });
  }

  handleSelect(letter) {
    this.setState({
      view: letter
    });
  }

  handleBack() {
    this.setState({
      view: null
    });
  }

  render() {
    const { loading, letters, view } = this.state;

    let content;
    if (loading) content = <Loading label="Fetching newsletters..." />;
    else if (view) content = <ViewLetter letter={view} onBack={this.handleBack} />
    else if (letters.length === 0) content = <Empty message="No Newsletters Added Yet." />;
    else content = <NewsletterList 
      letters={letters} 
      onSelect={this.handleSelect}
    />;

    return (
      <div>
        <PageTitle data-testid="pt-newsletters" title="Newsletters" />
        { content }
      </div>
    );
  }
}