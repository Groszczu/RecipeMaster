import { ofType } from 'redux-observable';
import {
  getRecipes,
  getRecipesSuccessful,
  getRecipesError,
} from './recipesSlice';
import { withLatestFrom, filter, switchMap, map } from 'rxjs/operators';
import recipes from '../../services/recipes';
import { getIsLoading } from './selectors';

export const getRecipesEpic = (action$, state$) =>
  action$.pipe(
    ofType(getRecipes.type),
    withLatestFrom(state$),
    filter(([, state]) => getIsLoading(state)),
    switchMap(() =>
      recipes.getRecipes().pipe(
        map((response) => {
          if (!response.error) {
            return getRecipesSuccessful({ recipes: response.recipes });
          }
          return getRecipesError(response.message);
        })
      )
    )
  );
