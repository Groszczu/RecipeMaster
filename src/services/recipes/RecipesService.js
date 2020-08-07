import { fromFetch } from 'rxjs/fetch';
import { catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';

const BASE_URL = 'https://moodup.team/test/info.php';

export default class RecipesService {
  getRecipes() {
    return fromFetch(BASE_URL, {
      selector: async (response) => {
        if (response.ok) {
          const responseJson = await response.json();

          // const recipes = await response.json() return { recipes }
          // add ids and mock recipes to imitate API response
          const mockedRecipes = Array(11)
            .fill(responseJson)
            .map((recipe, i) => ({
              ...recipe,
              title: recipe.title + i.toString(),
              id: i,
            }));
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
