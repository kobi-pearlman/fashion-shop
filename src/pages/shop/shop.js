import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.colections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
