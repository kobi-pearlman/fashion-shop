import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionIsFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

const CollectionOverveiwContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverveiwContainer;
