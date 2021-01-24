import CustomCard from '../card/card';
import Empty from '../empty/empty';

export default function UniversityList(props) {
  const { universities, onFavorite, isFavorite, enableFavorite } = props;
  const cards = universities.map((u, index) => {
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
    </div>
  );
}