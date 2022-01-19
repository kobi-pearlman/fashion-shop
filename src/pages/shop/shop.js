import React from "react";
import { Route, useRouteMatch } from "react-router-dom";


import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionOverveiwContainer from "../../components/collection-overview/CollectionOverViewContainer";
import CollectionPageContainer from "../collection/CollectionPageContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ShopPage = () => {

  const dispatch = useDispatch()
  const match = useRouteMatch()

  useEffect(() => {

    dispatch(fetchCollectionsStartAsync());
  }, [dispatch])





  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverveiwContainer}
      />
      <Route

        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}



export default ShopPage;
