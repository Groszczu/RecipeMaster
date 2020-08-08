import { fromFetch } from 'rxjs/fetch';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';

const BASE_URL = 'https://moodup.team/test/info.php';

export default class RecipesService {
  getRecipes() {
    return fromFetch(BASE_URL, {
      selector: async (response) => {
        if (response.ok) {
          const responseJson = await response.json();

          // mock recipes to imitate large API response
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
