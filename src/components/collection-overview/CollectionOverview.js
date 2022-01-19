import React from "react";
import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/CollectionPreview";

import "./collection-overview.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};



export default CollectionOverview;
