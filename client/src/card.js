import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Card = (props) => {
  const { name, email, id, fetchUser, editUser } = props;
  const deleteUser = () => {
    fetch(`http://localhost:3001/user/${id}`, {
      method: "Delete",
    }).then(fetchUser);
  };
  return (
    <div
      className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 "
      style={{ position: "relative" }}
    >
      <MdEdit
        className="edit-icon"
        onClick={() => editUser({ id, name, email })}
      />
      <img
        alt="error"
        src={`https://robohash.org/${id}`}
        style={{ height: 100 }}
      />
      <MdDelete className="delete-icon" onClick={deleteUser} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
