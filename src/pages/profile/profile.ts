import Handlebars from "handlebars";
import "./profile.scss";

const source =
  document.querySelector<HTMLScriptElement>("#entry-template")!.innerHTML;
const root = document.querySelector<HTMLDivElement>("#root");
const template = Handlebars.compile(source)({});
if (root) {
  root.innerHTML = template;
}

const userParamsConfig = [
  { label: "Почта", value: "pochta@yandex.ru", disabled: true , name: "email"},
  { label: "Логин", value: "ivanivanov", disabled: true , name: "login"},
  { label: "Имя", value: "Иван", disabled: true , name: "first_name"},
  { label: "Фамилия", value: "Иванов", disabled: true , name: "second_name"},
  { label: "Имя в чате", value: "Иван", disabled: true , name: "display_name"},
  { label: "Телефон", value: "+7 (909) 967 30 30", disabled: true , name: "phone"},
];
const params = document.querySelector<HTMLScriptElement>(
  "#user-params-template"
)!.innerHTML;

const paramsContainer = document.querySelector<HTMLDivElement>(
  ".profilePage__userParamsContainer"
);
const userParamsTemplate = Handlebars.compile(params)({
  userParams: userParamsConfig,
});

if (paramsContainer) {
  paramsContainer.innerHTML = userParamsTemplate;
}
