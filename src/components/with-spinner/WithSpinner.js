import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return spinner;
};

export default WithSpinner;
