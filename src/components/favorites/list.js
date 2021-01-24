import CustomCard from '../card/card';
import Empty from '../empty/empty';

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
          <Empty message="No Favorites Added Yet." /> :
          cards
      }
    </div>
  );
}