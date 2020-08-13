export interface PictureModel {
  data: { width: number; height: number; url: string };
}

export default interface UserModel {
  id: string;
  name: string;
  picture?: PictureModel;
}
