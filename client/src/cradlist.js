import React from "react";
import Card from "./card";

const CardList = (props) => {
  const { filteredRobots, fetchUser, editUser } = props;
  return (
    <div>
      {filteredRobots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            fetchUser={fetchUser}
            editUser={editUser}
          />
        );
      })}
    </div>
  );
};

export default CardList;
