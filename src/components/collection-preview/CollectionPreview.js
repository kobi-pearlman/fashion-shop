import React from "react";
import CollectionItem from "../collection-item/CollectionItem";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
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
