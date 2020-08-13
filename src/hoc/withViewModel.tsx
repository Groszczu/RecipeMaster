import React from 'react';

// withVieModel hoc passes all properties returned from viewModelHook to ViewComponent as props
// it let you use MVVM pattern without tight coupling
function withViewModel<T>(
  ViewComponent: React.ComponentType<T>,
  viewModelHook: () => T
) {
  return () => {
    const viewProps: T = viewModelHook();

    return <ViewComponent {...viewProps} />;
  };
}

export default withViewModel;
