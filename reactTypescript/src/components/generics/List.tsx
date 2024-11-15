import React from "react";

type ListProps = {
  items: string[] | number[];
  onClick: (value: string | number) => void;
};

const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h1>list of items</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
