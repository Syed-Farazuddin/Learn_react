import React from "react";

const ListsAndKeys = () => {
  const list = [
    {
      Name: "Faraz",
      Profession: "WEB DEVELOPER",
      Education: "COMPUTER SCIENCE",
    },
    {
      Name: "Farhna",
      Profession: "FRONT END DEVELOPER",
      Education: "INFORMATION TECHNOLOGY",
    },
    {
      Name: "Faraz",
      Profession: "FULL STACK DEVELOPER",
      Education: "BTECH",
    },
  ];
  console.log(list);
  return (
    <div>
      {/* Rendering Lists */}
      {list.map((people) => (
        // Keys are used to give every item a unique identity and map is used to iterate through every list element....
        <div key={people.id}>
          <h3>{people.Name}</h3>
          <h6>{people.Profession}</h6>
          <p>{people.Education}</p>
        </div>
      ))}
    </div>
  );
};

export default ListsAndKeys;
