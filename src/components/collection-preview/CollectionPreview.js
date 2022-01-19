import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const location = useLocation()



  return (
    <div className="collection-preview">
      <h1 onClick={() => history.push(`${location.pathname}/${routeName.toLowerCase()}`)}>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item, index) => {
          return index < 4 ? (
            <CollectionItem key={item.id} item={item} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
