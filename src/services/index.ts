import CameraRoll from './cameraRoll/CameraRoll';
import Facebook from './facebook/Facebook';
import RecipesService from './recipes/RecipesService';
import cameraRoll from './cameraRoll';
import facebook from './facebook';
import recipes from './recipes';

export default interface Services {
  cameraRoll: CameraRoll;
  facebook: Facebook;
  recipes: RecipesService;
}

export const appServices: Services = {
  cameraRoll: cameraRoll,
  facebook: facebook,
  recipes: recipes,
};
