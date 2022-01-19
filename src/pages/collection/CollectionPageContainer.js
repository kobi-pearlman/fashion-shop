import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import { selectCollectionIsLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/WithSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionIsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
