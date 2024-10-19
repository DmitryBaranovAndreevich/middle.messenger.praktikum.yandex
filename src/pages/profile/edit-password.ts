import { Block, TPropsObj } from "../../modules";
import { TEditPasswordTemplate } from "./profile-types";
import styles from "./profile.module.scss";

export class EditPasswordTemplate extends Block<TEditPasswordTemplate> {
  constructor(props: TPropsObj<TEditPasswordTemplate>) {
    super(props);
  }
  render() {
    return `<div class="${styles.profile}">
                <div class="${styles.profile__imgLoader}">
                  {{{changeAvatarButton}}}
                </div>
                <form>
                  <ul class="${styles.profile__userParamsContainer}">
                    {{{oldPass}}}
                    {{{newPass}}}
                    {{{repeat_newPass}}}
                  </ul>
                  {{{submitButton}}}
                </form>
              </div>`;
  }
}
