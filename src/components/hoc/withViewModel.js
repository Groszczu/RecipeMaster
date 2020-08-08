import React from 'react';

// withVieModel hoc pass all properties returned from viewModelHook to ViewComponent
// it let you use MVVM patter and test ViewComponent without tight coupling
// to work correctly viewModelHook must return object with properties matching ViewComponent props
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
