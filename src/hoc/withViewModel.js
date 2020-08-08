import React from 'react';

// withVieModel hoc passes all properties returned from viewModelHook to ViewComponent as props
// it let you use MVVM pattern and mock ViewComponent's props
// To work correctly viewModelHook must return object with properties matching ViewComponent's props
const withViewModel = (ViewComponent, viewModelHook, viewModelParams) => (
  otherProps
) => {
  const viewProps = viewModelHook(viewModelParams);

  return <ViewComponent {...viewProps} {...otherProps} />;
};

export default withViewModel;

// USAGE
// const useRecipesViewModel = () => {
//   const recipes = useSelector(getRecipes);
//   return { recipes };
// };

// const RecipesView = ({ recipes }) => {
//   return <RecipesList recipes={recipes} />
// };

// const RecipesViewWithViewModel = withViewModel(RecipesView, useRecipesViewModel);
