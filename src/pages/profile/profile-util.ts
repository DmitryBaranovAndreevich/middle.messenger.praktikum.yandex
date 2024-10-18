import { CenterPageLayout } from "../../layouts";
import { render } from "../../modules";
import { userParamsConfig } from "./profile-constants";
import { ProfileTemplate } from "./profile";
import { TProfileTemplate } from "./profile-types";
import { Button, creteParams, Params } from "./components";
import styles from "./profile.module.scss";
import { createEditProfileTemplate } from "./edit-profile-utils";


  const params = userParamsConfig.map((el) =>
    creteParams({
      errorMessage: "error",
      type: el.type,
      disabled: el.disabled ? "disabled" : "",
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


  const editProfileButton = new Button({
    content: "Изменить данные",
    events: {
      click: onEditProfileClick,
    },
  });

  const changePassButton = new Button({
    content: "Изменить пароль",
    events: {
      click: () => console.log("click"),
    },
  });

  const exitButton = new Button({
    content: "Выйти",
    className: styles.profile__exit,
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

  const profileTemplate = new ProfileTemplate({
    ...htmlElements,
    name: "Иван",
    editProfileButton,
    changePassButton,
    exitButton,
    changeAvatarButton,
  });


const layout = new CenterPageLayout({
  className: "profilePage",
  content: profileTemplate,
});

function onEditProfileClick() {
  console.log("click")
  layout.setProps({
    className: "profilePage1",
    content: createEditProfileTemplate()
  });
}

render("#root", layout);
