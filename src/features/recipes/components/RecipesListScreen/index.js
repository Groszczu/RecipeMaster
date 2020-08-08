import RecipesListScreen from './RecipesListScreen';
import withViewModel from '../../../../hoc/withViewModel';
import useRecipesListViewModel from '../../useRecipesListViewModel';

export default withViewModel(RecipesListScreen, useRecipesListViewModel);
