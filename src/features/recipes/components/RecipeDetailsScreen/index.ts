import RecipeDetailsScreen from './RecipeDetailsScreen';
import useRecipeDetailsViewModel from '../../useRecipeDetailsViewModel';
import withViewModel from '../../../../hoc/withViewModel';

export default withViewModel(RecipeDetailsScreen, useRecipeDetailsViewModel);
