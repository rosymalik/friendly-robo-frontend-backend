import React from "react";
import Card from "./card";

const CardList = ({ filteredRobots }) => {
  return (
    <div>
      {filteredRobots.map((user, i) => {
        return (
          <Card
            key={filteredRobots[i].id}
            id={filteredRobots[i].id}
            name={filteredRobots[i].name}
            email={filteredRobots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
