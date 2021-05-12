import React from 'react';

const List = ({people}) => {
  return (
    <>
     {people.map((person)=>{
       const {id,name,age,image}=person;
       return(
         <ariticle key={id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h3>{name}</h3>
            <p>{age} years</p>
          </div>

         </ariticle>
       )
     })}
    </>
  );
};

export default List;
