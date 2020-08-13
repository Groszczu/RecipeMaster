import { fromFetch } from 'rxjs/fetch';
import { catchError, timeout } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { RecipeModel } from '@features/recipes/RecipeModel';

const BASE_URL = 'https://moodup.team/test/info.php';

interface RecipesResult {
  error: boolean;
  message?: string;
  recipes?: RecipeModel[];
}

export default class RecipesService {
  getRecipes(): Observable<RecipesResult> {
    return fromFetch(BASE_URL, {
      selector: async (response) => {
        if (response.ok) {
          const responseJson = await response.json();

          // mock recipes to imitate large API response
          const mockedRecipes = Array(11)
            .fill(responseJson)
            .map(
              (recipe, i): RecipeModel => ({
                ...recipe,
                title: recipe.title + i.toString(),
                id: i,
              })
            );
          return {
            error: false,
            message: null,
            recipes: mockedRecipes,
          };
        }
        return {
          error: true,
          message: await response.text(),
          recipes: null,
        };
      },
    }).pipe(
      timeout(5000),
      catchError((err) =>
        of({
          error: true,
          message: err.message,
          recipes: null,
        })
      )
    );
  }
}
