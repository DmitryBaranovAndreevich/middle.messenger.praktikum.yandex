import { userParamsConfig } from "./profile-constants";
import { TProfileTemplate } from "./profile-types";
import { Button, creteParams, Params } from "./components";
import { EditProfileTemplate } from "./edit-profile";
import { Button as SubmitButton } from "../../components";
import styles from "./profile.module.scss";

export function createEditProfileTemplate(goToProfile: () => void) {
  const params = userParamsConfig.map((el) =>
    creteParams({
      errorMessage: el.errorMessage || "",
      type: el.type,
      disabled: "",
      name: el.name,
      label: el.label,
      value: el.value,
      validateFunc: el.validateFunc,
    })
  );

  const htmlElements = params.reduce(
    (acc, el, index) => ({
      ...acc,
      [userParamsConfig[index].name]: el.component,
    }),
    {} as Record<keyof TProfileTemplate, Params>
  );

  function validateForm() {
    params.forEach((el) => el.validateInput());
    const isError = params.find((el) => el.state.isError);
    return !isError;
  }

  function getFormValues() {
    return params.reduce(
      (acc, el, index) => ({
        ...acc,
        [userParamsConfig[index].name]: el.state.value,
      }),
      {} as Record<keyof TProfileTemplate, Params>
    );
  }

  const submitButton = new SubmitButton({
    type: "submit",
    text: "Сохранить",
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
    events: {
      submit: (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
          const values = getFormValues();
          console.log(values);
          goToProfile();
        }
      },
    },
  });
  return editProfileTemplate;
}
