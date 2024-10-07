import React from "react";
type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((el) => {
        return (
          <h2 key={el.first}>
            {el.first}
            {el.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
