import { userParamsConfig } from "./profile-constants";
import { TProfileTemplate } from "./profile-types";
import { Button, creteParams, Params } from "./components";
import { EditProfileTemplate } from "./edit-profile";
import { Button as SubmitButton } from "../../components";
import styles from "./profile.module.scss";

export function createEditProfileTemplate() {
  const params = userParamsConfig.map((el) =>
    creteParams({
      errorMessage: "error",
      type: el.type,
      disabled: "",
      name: el.name,
      label: el.label,
      value: el.value,
    })
  );

  const htmlElements = params.reduce(
    (acc, el, index) => ({
      ...acc,
      [userParamsConfig[index].name]: el.component,
    }),
    {} as Record<keyof TProfileTemplate, Params>
  );

  const submitButton = new SubmitButton({
    type: "submit",
    text: "Сохранить",
    events: {
      click: () => console.log("click"),
    },
  });

  const changeAvatarButton = new Button({
    content: "Поменять аватар",
    className: styles.profile__changeAvatar,
    events: {
      click: () => console.log("click"),
    },
  });

  const editProfileTemplate = new EditProfileTemplate({
    ...htmlElements,
    name: "Иван",
    submitButton,
    changeAvatarButton,
  });
  return editProfileTemplate;
}
