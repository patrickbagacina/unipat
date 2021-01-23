import CustomCard from '../card/card';
import Empty from '../empty/empty';

export default function UniversityList(props) {
  const { universities } = props;
  return (
    <div>
      {
        universities.length === 0 ? 
          <Empty message="No Universities Found." /> :
          universities.map((u, index) => 
            <CustomCard 
              name={u.name} 
              country={u.country}
              key={u.name.concat(index)} />
          )
      }
    </div>
  );
}