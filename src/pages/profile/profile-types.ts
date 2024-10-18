import { Button, Link } from "../../components";
import { Params } from "./components";

export type TProfileTemplate = {
  phone: Params;
  display_name: Params;
  second_name: Params;
  first_name: Params;
  login: Params;
  email: Params;
  Name: string;
  editProfileButton: Button;
  changePassButton: Button;
  exitButton: Link;
};
