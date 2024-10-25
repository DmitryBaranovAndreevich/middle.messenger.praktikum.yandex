import { Block, TPropsObj } from "../../modules";
import { TProfileTemplate } from "./profile-types";
import styles from "./profile.module.scss";

export class ProfileTemplate extends Block<TProfileTemplate> {
  constructor(props: TPropsObj<TProfileTemplate>) {
    super(props);
  }
  render() {
    return `<div class="${styles.profile}">
                <div class="${styles.profile__imgLoader}">
                  {{{changeAvatarButton}}}
                </div>
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
                <div class="${styles.profile__splitter}"></div>
                {{{changePassButton}}}
                <div class="${styles.profile__splitter}"></div>
                {{{exitButton}}}
                {{{popup}}}
              </div>`;
  }
}
