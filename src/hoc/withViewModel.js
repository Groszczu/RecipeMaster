import React from 'react';

// withVieModel hoc passes all properties returned from viewModelHook to ViewComponent as props
// it let you use MVVM pattern without tight coupling
// To work correctly viewModelHook must return object with properties matching ViewComponent's props
const withViewModel = (ViewComponent, viewModelHook, viewModelParams) => (
  otherProps
) => {
  const viewProps = viewModelHook(viewModelParams);

  return <ViewComponent {...viewProps} {...otherProps} />;
};

export default withViewModel;
