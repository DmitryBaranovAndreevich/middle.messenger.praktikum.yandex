import { Block, TPropsObj } from "../../modules";
import { TEditProfileTemplate } from "./profile-types";
import styles from "./profile.module.scss";

export class EditProfileTemplate extends Block<TEditProfileTemplate> {
  constructor(props: TPropsObj<TEditProfileTemplate>) {
    super(props);
  }
  render() {
    return `<div class="${styles.profile}">
                <div class="${styles.profile__imgLoader}">
                  {{{changeAvatarButton}}}
                </div>
                <ul class="${styles.profile__userParamsContainer}">
                  {{{email}}}
                  {{{login}}}
                  {{{first_name}}}
                  {{{second_name}}}
                  {{{display_name}}}
                  {{{phone}}}    
                  {{{buttonSubmit}}}
                </ul>
                {{{submitButton}}}
              </div>`;
  }
}
