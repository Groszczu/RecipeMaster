import { ofType, Epic } from 'redux-observable';
import {
  getRecipes,
  getRecipesSuccessful,
  getRecipesError,
} from './recipesSlice';
import { withLatestFrom, filter, map, switchMapTo } from 'rxjs/operators';
import { getIsLoading } from './selectors';
import { RootAction, RootState } from 'app/store';
import Services from 'services';

export const getRecipesEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { recipes }) =>
  action$.pipe(
    ofType(getRecipes.type),
    withLatestFrom(state$),
    filter(([, state]) => getIsLoading(state)),
    switchMapTo(
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
