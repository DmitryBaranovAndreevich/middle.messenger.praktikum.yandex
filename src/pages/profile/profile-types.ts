import { Button, Params } from "./components";
import { Button as SubmitButton } from "../../components";

export type TProfileTemplate = {
  phone: Params;
  display_name: Params;
  second_name: Params;
  first_name: Params;
  login: Params;
  email: Params;
  name: string;
  editProfileButton: Button;
  changePassButton: Button;
  exitButton: Button;
  changeAvatarButton: Button;
};

export type TEditProfileTemplate = Omit<
  TProfileTemplate,
  "editProfileButton" | "changePassButton" | "exitButton"
> & { submitButton: SubmitButton };

export interface ICreateProfile {
  onEditProfileClick: () => void;
}
