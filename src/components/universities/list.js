import React from 'react';
import CustomCard from '../card/card';
import Empty from '../empty/empty';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export default class UniversityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed: 20
    };

    this.hasMore = this.hasMore.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    const steps = 20;
    this.setState({
      displayed: this.state.displayed + steps,
    });
  }

  hasMore() {
    return this.state.displayed < this.props.universities.length;
  }

  render() {
    const { universities, onFavorite, isFavorite, enableFavorite } = this.props;
    const show = universities.slice(0, this.state.displayed);
    const cards = show.map((u, index) => {
      const isActive = isFavorite(u);

      return <CustomCard 
        key={u.name.concat(index)}
        title={u.name} 
        description={u.country}
        links={u.web_pages}
        enableButton={enableFavorite}
        onClick={ () => onFavorite(u) }
        isActive={isActive} />
    });

    return (
      <div>
        {
          universities.length === 0 ? 
            <Empty message="No Universities Found." /> :
            cards
        }
        {
          this.hasMore() && <Grid container>
            <Grid item xs={12} className="center" style={{ marginTop: '15px' }}>
              <Button 
                color="primary" 
                onClick={this.showMore}>
                Show More
              </Button>
            </Grid>
          </Grid>
        }
      </div>
    );
  }
}