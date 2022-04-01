import React from "react";

const Posts = ({
  listCharacter,
  loading,
  characterDetails,
  setShowDetails,
}) => {
  if (loading) {
    return <h2 className="text-danger">Loading...</h2>;
  }
  const onClickhandler = (listChar) => {
    characterDetails(listChar.char_id);
    setShowDetails((prev) => !prev);
  };

  return (
    <table className="table mt-5 table-striped table-hover">
      <thead>
        <tr className="table-success">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Occupation</th>
          <th scope="col">Date Of Birth</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {listCharacter.map((listChar) => {
          return (
            <tr
              key={listChar.char_id}
              onClick={() => onClickhandler(listChar)}
              className="cursor-pointer"
            >
              <th scope="row">{listChar.char_id}</th>
              <td>{listChar.name}</td>
              <td>{listChar.occupation.map((oc) => `${oc}, `)}</td>
              <td>{listChar.birthday}</td>
              <td>{listChar.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Posts;
