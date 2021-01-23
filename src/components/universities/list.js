import CustomCard from '../card/card';

export default function UniversityList(props) {
  return (
    <div>
      {
        props.universities.map((u, index) => <CustomCard 
          name={u.name} 
          country={u.country}
          key={u.name.concat(index)} />
        )
      }
    </div>
  );
}