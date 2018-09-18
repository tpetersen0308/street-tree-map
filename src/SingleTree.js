import React from 'react';

export const SingleTree = props => {
  return (
    <div className="singleTreeView">
      <div className="basicInfo">
        <h1>{props.tree.commonName}</h1>
        <p>{props.tree.speciesName}</p>
        <img src={props.tree.image} alt={props.tree.commonName} />
      </div>
      <div className="locationInfo">
        <h4>Location</h4>
        <p>Nearest Address:</p>
        <p>
          {props.tree.location.nearestAddress.street}
          <br />
          {props.tree.location.nearestAddress.city}
        </p>
        <p>Tree ID:</p>
        <p>{props.tree.location.treeId}</p>
        <img
          src={props.tree.location.streetViewImage}
          alt="Street View Image"
        />
      </div>
    </div>
  );
};
