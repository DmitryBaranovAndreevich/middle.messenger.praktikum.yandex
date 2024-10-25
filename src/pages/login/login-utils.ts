import { CenterPageLayout } from "../../layouts";
import { getInputWithItem } from "../../components";
import { Button, InputWithItem, Link } from "../../components";
import { TLoginTemplate } from "./login-types";
import { LoginTemplate } from "./login";
import styles from "./login.module.scss";
import { ERouterEvents, eventBusRouter } from "../utils";
import { validateUserLogin, validateUserPassword } from "../../utils";

const LOGIN_INPUT_FIELDS = [
  {
    label: "Логин",
    value: "ivanivanov",
    disabled: false,
    name: "login",
    type: "text",
    errorMessage: "Допустимы только буквы английского алфавита, цыфры, - и _",
    validateFunc: validateUserLogin,
  },
  {
    label: "Пароль",
    value: "123456789",
    disabled: false,
    name: "password",
    type: "password",
    errorMessage:
      "Пароль должен быть от 8 до 50 символов и содержать заглавные буквы и цифры",
    validateFunc: validateUserPassword,
  },
];

const inputs = LOGIN_INPUT_FIELDS.map((el) =>
  getInputWithItem({
    type: el.type,
    name: el.name,
    item: el.label,
    error: el.errorMessage,
    disabled: el.disabled,
    validateFunc: el.validateFunc,
  }),
);

export function createLoginPage() {
  const htmlElements = inputs.reduce(
    (acc, el) => ({
      ...acc,
      [el.name]: el.inputWithItem,
    }),
    {} as Record<keyof TLoginTemplate, InputWithItem>,
  );

  const buttonSubmit = new Button({
    text: "Авторизоваться",
    type: "submit",
    className: styles.loginPage__submitButton,
  });

  const link = new Link({
    content: "Нет аккаунта?",
    url: `${window.location.origin}/register`,
    className: styles.loginPage__link,
    events: {
      click: (e: Event) => {
        e.preventDefault();
        const a = e.target as HTMLLinkElement;
        history.pushState({}, "", a.href);
        eventBusRouter.emit(ERouterEvents.URL_CHANGE);
      },
    },
  });

  const registerTemplate = new LoginTemplate({
    ...htmlElements,
    buttonSubmit,
    link,
    events: {
      submit: (e) => {
        e.preventDefault();
        inputs.forEach((input) => {
          input.validateInputValue();
        });
        const isError = inputs.find((el) => el.state.isError);
        if (isError) {
          return;
        }

        const formValue = inputs.reduce(
          (acc, el) => ({ ...acc, [el.name]: el.state.value }),
          {},
        );
        console.log(formValue);
      },
    },
  });

  const layout = new CenterPageLayout({
    className: "loginPage",
    content: registerTemplate,
  });

  return layout;
}
