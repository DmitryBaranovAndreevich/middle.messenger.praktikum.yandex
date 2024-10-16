import { registerParamsConfig } from "./register-constants";
import { CenterPageLayout } from "../../layouts";
import styles from "./register.module.scss";
import { getInputWithItem } from "../../components";
import { TRegisterTemplate } from "./register-types";
import { Button, InputWithItem, Link } from "../../components";
import { RegisterTemplate } from "./register";
import { render } from "../../modules";

const inputs = registerParamsConfig.map((el) =>
  getInputWithItem({
    type: el.type,
    name: el.name,
    item: el.label,
    error: "error",
    disabled: el.disabled,
  })
);

const htmlElements = inputs.reduce(
  (acc, el) => ({
    ...acc,
    [el.name]: el.inputWithItem,
  }),
  {} as Record<keyof TRegisterTemplate, InputWithItem>
);

const buttonSubmit = new Button({
  text: "Авторизоваться",
  type: "submit",
  className: styles.registerPage__submitButton,
  events: {
    click: () => console.log("click"),
  },
});

const link = new Link({
  content: "Нет аккаунта?",
  url: "../register/register.html",
  className: styles.registerPage__link,
});

const registerTemplate = new RegisterTemplate({
  ...htmlElements,
  buttonSubmit,
  link,
});

const layout = new CenterPageLayout({
  className: "registerPage",
  content: registerTemplate,
});

render("#root", layout);
