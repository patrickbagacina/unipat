import React from 'react';
import NewsletterCard from './card';
import Empty from '../empty/empty';
import PropTypes from 'prop-types';

export default function NewsletterList(props) {
  const { letters, onSelect } = props;
  const cards = letters.map((l) => {
    return <NewsletterCard 
      key={`${l.id}`}
      date={l.date}
      name={l.school.name}
      country={l.school.country}
      onClick={ () => onSelect(l) } />
  });

  return (
    <div>
      {
        letters.length === 0 ? 
          <Empty message="No Newsletters Added Yet." /> :
          cards
      }
    </div>
  );
}

NewsletterList.propTypes = {
  letters: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};