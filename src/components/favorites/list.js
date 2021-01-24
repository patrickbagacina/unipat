import React from 'react';
import CustomCard from '../card/card';
import Empty from '../empty/empty';
import PropTypes from 'prop-types';

export default function FavoriteList(props) {
  const { universities, onFavorite, enableFavorite } = props;
  const cards = universities.map((u, index) => {
    return <CustomCard 
      key={u.name.concat(index)}
      title={u.name} 
      description={u.country}
      links={u.web_pages}
      enableButton={enableFavorite}
      onClick={ () => onFavorite(u) }
      isActive={true} />
  });

  return (
    <div>
      {
        universities.length === 0 ? 
          <Empty data-testid="fl-empty" message="No Favorites Added Yet." /> :
          cards
      }
    </div>
  );
}

FavoriteList.propTypes = {
  universities: PropTypes.array.isRequired,
  onFavorite: PropTypes.func.isRequired,
  enableFavorite: PropTypes.bool.isRequired,
};