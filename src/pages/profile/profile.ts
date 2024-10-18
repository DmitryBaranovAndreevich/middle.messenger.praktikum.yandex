import { Block, TPropsObj } from "../../modules";
import { TProfileTemplate } from "./profile-types";
import styles from "./profile.module.scss";

export class ProfileTemplate extends Block<TProfileTemplate> {
  constructor(props: TPropsObj<TProfileTemplate>) {
    super(props);
  }
  render() {
    return `<div class="${styles.profile}">
                <p class="${styles.profile__title}">{{name}}</p>
                <ul class="${styles.profile__userParamsContainer}">
                  {{{email}}}
                  {{{login}}}
                  {{{first_name}}}
                  {{{second_name}}}
                  {{{display_name}}}
                  {{{phone}}}    
                  {{{buttonSubmit}}}
                </ul>
                {{{editProfileButton}}}
                {{{changePassButton}}}
                {{{exitButton}}}
              </div>`;
  }
}
