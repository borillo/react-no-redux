import React from "react";

const Container = ({ obtainList, isLoading, people, ...props }) => {

  const items = people.map(person => { // Esto tiene sentido aqui o en el Servicio mejor?
    return <p key={person.name}>* {person.name} - {person.age}</p>
  });

  return (
    <>
      <h1>List</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && items}
      <button onClick={obtainList}>Get People</button>
    </>
  );
};

export { Container };
