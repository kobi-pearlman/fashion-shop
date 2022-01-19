import React from "react";


import "./collection.scss";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  const { collectionId } = useParams()
  const collection = useSelector(selectCollection(collectionId))
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


export default CollectionPage;
