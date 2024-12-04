import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [selectedPersonId, setSelectedPersonId] = useState();
  
  const { data, isFetching, error  } = useFetch({
    key: 'people',
    url: 'https://dummyjson.com/users',
  });

  const { data: clickedPersonData } = useFetch({
    key: `person-${selectedPersonId}`,
    url: `https://dummyjson.com/users/${selectedPersonId}`,
    enabled: selectedPersonId !== undefined,
  });

  const onPersonClick = (id) => {
    setSelectedPersonId(id);
  }

  useEffect(() => {
    if(!clickedPersonData) return;
    alert(`You clicked on ${clickedPersonData?.firstName}. Their ip address is ${clickedPersonData?.ip}`);
  }, [clickedPersonData]);

  if(isFetching) {
    return (
      <h1>Loading...</h1>
    )
  }

  if(!isFetching && error) {
    return (
      <h1>Error: {error.message}</h1>
    )
  }

  return (
      <div>
        <h1>People</h1>
          {data.users.map(person => (
            <div key={person.id}>
              <img 
                src={person.image} 
                alt={person.firstName}
                onClick={() => onPersonClick(person.id)}
                style={{ cursor: 'pointer' }} />
              <li>
                {person.firstName} {person.lastName}
              </li>
            </div>
          ))}
      </div>
  )
}

export default App;
