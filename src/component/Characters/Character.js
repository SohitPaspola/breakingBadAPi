import React from "react";

const Details = ({ charId, currentList }) => {
  return (
    <div className= 'container mt-1 border border-success'>
      {currentList.map((charDetail) => {
        if (charId === charDetail.char_id) {
          return (
            <div key={charDetail.char_id} className="d-inline-flex p-2">
              <dl>
                <dt>Name</dt>
                <dd>{charDetail.name}</dd>
                <dt>DOB</dt>
                <dd>{charDetail.birthday}</dd>
                <dt>Occupation</dt>
                <dd>{charDetail.occupation}</dd>
                <dt>Status</dt>
                <dd>{charDetail.status}</dd>
                <dt>Nickname</dt>
                <dd>{charDetail.nickname}</dd>
                <dt>Portrayed</dt>
                <dd>{charDetail.portrayed}</dd>
                <dt>Appearance</dt>
                <dd>{charDetail.appearance.map((res) => `${res}, `)}</dd>
              </dl>

              <div width="100%">
                <img className="p-8" src={charDetail.img} alt={charDetail.name} width="40%" />
              </div>
            </div>
          );
        }
        return'';
      })}
    </div>
  );
};

export default Details;
