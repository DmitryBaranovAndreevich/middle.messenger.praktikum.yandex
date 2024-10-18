import { CenterPageLayout } from "../../layouts";
import { Button, InputWithItem, Link } from "../../components";
import { render } from "../../modules";
import { userParamsConfig } from "./profile-constants";
import { ProfileTemplate } from "./profile";
import { TProfileTemplate } from "./profile-types";
import { creteParams, Params } from "./components";

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

// const buttonSubmit = new Button({
//   text: "Авторизоваться",
//   type: "submit",
//   className: styles.registerPage__submitButton,
//   events: {
//     click: () => console.log("click"),
//   },
// });

const profileTemplate = new ProfileTemplate({
  ...htmlElements,
  name: "Иван"
});
// link,

const layout = new CenterPageLayout({
  className: "profilePage",
  content: profileTemplate,
});

render("#root", layout);
